const JWT = require("jsonwebtoken");
const NewUser = require("../model/NewUserSchema");

const Voter_Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = JWT.verify(token, process.env.SECRET_KEY);

    const rootUser = await NewUser.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User not Found");
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
module.exports = Voter_Authenticate;
