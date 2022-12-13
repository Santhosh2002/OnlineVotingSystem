const mongooose = require("mongoose");
const JWT = require("jsonwebtoken");
const userSchema = new mongooose.Schema({
  aadharnum: {
    type: Number,
    required: true,
  },
  mobilenum: {
    type: Number,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = JWT.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const UserData = mongooose.model("USER", userSchema);
module.exports = UserData;
