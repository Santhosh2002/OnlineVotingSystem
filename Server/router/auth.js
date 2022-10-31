const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
router.get('/', (req, res) => {
    res.send('Hello');
});

require('../db/conn');
const User = require("../model/userSchema");
const Admin = require("../model/adminSchema");
const Election = require("../model/electionSchema");

router.post('/register',async (req, res) => {
    const { aadharnum,mobilenum } = req.body;

    if (!aadharnum||!mobilenum) {
        res.status(422).json({ error: "Please fill empty Fields" });
    }
    try {
        const userExist = await User.findOne({ aadharnum: aadharnum })
        if (userExist) {
           res.status(422).json({ error: "Aadhar Aleary Exists" });
        }
        const user = new User({ aadharnum,mobilenum })
        
        await user.save();

        res.status(201).json({ message: "Authuntication Successefull" });

    } catch (err) {
        console.log(err);
    }
    
});

router.post('/adminlogin',async (req, res) => {

    try {
        const { username,password } = req.body;
        
        if (!username || !password) {
        return res.status(422).json({ error: "Please fill empty Fields" });
        }

        const adminLogin = await Admin.findOne({ username: username });
        console.log(adminLogin);
        if (adminLogin) {
             res.json({ message: "Admin Login Successfull" });
        } else {
             res.json({ message: "Admin Login UnSuccessfull" });
        }
       
           
    } catch (err) {
        console.log(err);
    }
    
});

router.post('/CandidateLi', (req, res) => {
    Election.find({}).then(
        (items) => res.json(items)
    ).catch(err => console.log(err));
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