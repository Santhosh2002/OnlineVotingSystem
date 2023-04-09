const JWT = require("jsonwebtoken");
const Admin = require("../model/adminSchema");

const adminauth = async (req, res, next) => {
  try {
    const token = req.cookies.jtoken;
    const verifyToken = JWT.verify(token, process.env.SECRET_KEY);

    const rootUser = await Admin.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("Admin not Found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (error) {
    res.status(401).send("Unauthorized: No token provided");
    console.log(error);
  }
};
module.exports = adminauth;
