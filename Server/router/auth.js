const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello');
});

require('../db/conn');
const User = require("../model/userSchema");
const Admin = require("../model/adminSchema");
router.post('/register',async (req, res) => {
    const { aadharnum } = req.body;

    if (!aadharnum) {
        return res.status(422).json({ error: "Please fill empty Fields" });
    }
    try {
        const userExist = await User.findOne({ aadharnum: aadharnum })
        if (userExist) {
            return res.status(422).json({ error: "Aadhar Aleary Exists" });
        }
        const user = new User({ aadharnum })
        
        const userReg = await user.save();
 
        if (userReg) {
            res.status(201).json({ message: "Authuntication Successeful" });
        }
           
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

module.exports = router;