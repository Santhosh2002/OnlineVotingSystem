// import cors from 'antdcors';

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const cookieParser = require("cookie-parser");

require("../db/conn");
const NewUser = require("../model/NewUserSchema");
const Admin = require("../model/adminSchema");
const Election = require("../model/electionSchema");

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
  }
  try {
    let token;
    const userExist = await NewUser.findOne({
      aadharnum: aadharnum,
      mobilenum: mobilenum,
    });
    if (userExist) {
      token = await userExist.generateAuthToken();
      console.log(token);
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

router.post("/authenticate", async (req, res) => {
  const { voterid, mobile } = req.body;

  if (voterid == 0 || mobile == 0) {
    res.status(421).json({ message: "Please fill empty Fields" });
  }
  try {
    const userExist = await NewUser.findOne({
      voterid: voterid,
      mobilenum: mobile,
    });
    if (userExist) {
      return res.status(201).json({ message: "Authentication Successfull" });
    }
    res.status(202).json({ message: "Authentication Unsuccessfull" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/adminlogin", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(422).json({ error: "Please fill empty Fields" });
    }

    const adminLogin = await Admin.findOne({ username: username });
    console.log(adminLogin);
    if (adminLogin) {
      res.json({ message: "Login Successfull" });
    } else {
      res.json({ message: "Login UnSuccessfull" });
    }
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
module.exports = router;

// candidates_details.forEach(Cand => {
//     const newCand = new Election({
//         party: Cand.Party,
//         candidate: Cand.Candidate,
//         qualifications: Cand.Qualifications,
//         url: Cand.url,
//         qualities: Cand.Qualities

//     })
//     newCand.save();
// })
