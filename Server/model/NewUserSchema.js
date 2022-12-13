const JWT = require("jsonwebtoken");
const mongooose = require("mongoose");
const NewUserSchema = new mongooose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  aadharnum: {
    type: Number,
    required: true,
  },
  voterid: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  mobilenum: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
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

NewUserSchema.methods.generateAuthToken = async function () {
  try {
    let token = JWT.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const NewUserData = mongooose.model("NEWUSER", NewUserSchema);

module.exports = NewUserData;
