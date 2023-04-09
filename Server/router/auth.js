// import cors from 'antdcors';

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const adminauth = require("../middleware/adminauth");

const cookieParser = require("cookie-parser");
require("../db/conn");
const NewUser = require("../model/NewUserSchema");
const Admin = require("../model/adminSchema");
const Election = require("../model/electionSchema");
const Voter_Authenticate = require("../middleware/Voter_Authenticate");

router.get("/", (req, res) => {
  res.send("Hello");
});
// router.use(cors());
// const JWT = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const { firstname, lastname, aadharnum, voterid, dob, mobilenum, address } =
    req.body;

  if (
    firstname == null ||
    lastname == null ||
    dob == 0 ||
    aadharnum == 0 ||
    voterid == null ||
    address == null ||
    mobilenum == 0
  ) {
    res.status(421).json({ message: "Please fill empty Fields" });
  } else if (aadharnum.length != 12) {
    res.status(423).json({ message: "Invalid Aadharnumber" });
  } else if (mobilenum.length != 10) {
    res.status(424).json({ message: "Invalid Mobile Number" });
  }
  try {
    const userExist = await NewUser.findOne({ aadharnum: aadharnum, dob: dob });
    if (userExist) {
      return res.status(422).json({ message: "You have already Registered" });
    }
    const newuser = new NewUser({
      firstname,
      lastname,
      dob,
      aadharnum,
      voterid,
      address,
      mobilenum,
    });
    await newuser.save();

    res.status(201).json({ message: "Registration Successfull" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  const { aadharnum, mobilenum } = req.body;
  if (aadharnum == 0 || mobilenum == 0) {
    res.status(421).json({ message: "Please fill empty Fields" });
  } else if (aadharnum.length != 12) {
    res.status(422).json({ message: "Invalid Aadharnumber" });
  } else if (mobilenum.length != 10) {
    res.status(423).json({ message: "Invalid Mobile Number" });
  }

  try {
    let token;
    const userExist = await NewUser.findOne({
      aadharnum: aadharnum,
      mobilenum: mobilenum,
    });
    if (userExist) {
      token = await userExist.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      return res
        .status(201)
        .json({ message: "Authentication Successfull", token });
    }
    res.status(202).json({ message: "Authentication Unsuccessfull" });
  } catch (err) {
    console.log(err);
  }
});
router.post("/adminlogin", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(422).json({ error: "Please fill empty Fields" });
  }
  try {
    let token;
    const adminLogin = await Admin.findOne({
      username: username,
      password: password,
    });

    if (adminLogin) {
      token = await adminLogin.generateAuthToken();
      res.cookie("jtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      return res
        .status(201)
        .json({ message: "Authentication Successfull", token });
    }
    res.status(202).json({ message: "Authentication Unsuccessfull" });
  } catch (err) {
    console.log(err);
  }
});
router.post("/authenticate", async (req, res) => {
  const { voterid, mobilenum } = req.body;

  if (voterid == 0 || mobilenum == 0) {
    res.status(421).json({ message: "Please fill empty Fields" });
  }
  try {
    const userExist = await NewUser.findOne({
      voterid: voterid,
      mobilenum: mobilenum,
    });
    if (userExist) {
      token = await userExist.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      return res
        .status(201)
        .json({ message: "Authentication Successfull", token });
    }
    res.status(202).json({ message: "Authentication Unsuccessfull" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/CandidateLi", (req, res) => {
  Election.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});
router.use(cookieParser());

router.get("/otp_Confirm", authenticate, (req, res) => {
  res.send(req.rootUser);
});
router.get("/voter_otpConfirm", authenticate, (req, res) => {
  res.send(req.rootUser);
});
router.post("/NewCandidate", async (req, res) => {
  const {
    party,
    candidate,
    qualifications,
    aadharnum,
    gender,
    age,
    qualities,
  } = req.body;

  if (
    aadharnum == 0 ||
    party == null ||
    candidate == null ||
    qualifications == null ||
    gender == null ||
    age == 0 ||
    qualities == null
  ) {
    res.status(421).json({ message: "Please fill empty Fields" });
  }

  try {
    const candidateExist = await Election.findOne({
      candidate: candidate,
      aadharnum: aadharnum,
    });
    if (candidateExist) {
      return res.status(422).json({ message: "Candidate Already Exists" });
    }
    const newcandidate = new Election({
      party,
      candidate,
      qualifications,
      aadharnum,
      gender,
      age,
      qualities,
    });
    await newcandidate.save();

    res.status(201).json({ message: "Added Candidate Successfull" });
  } catch (err) {
    console.log(err);
  }
});
router.get("/adminauth", adminauth, (req, res) => {
  res.send(req.rootUser);
});
module.exports = router;
