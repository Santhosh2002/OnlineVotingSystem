const mongooose = require("mongoose");
const JWT = require("jsonwebtoken");

const adminSchema = new mongooose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    reruired: true,
  },
  address: {
    type: String,
    reruired: true,
  },
  dob: {
    type: String,
    reruired: true,
  },
  employeeid: {
    type: String,
    reruired: true,
  },
  modilenumber: {
    type: String,
    reruired: true,
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
adminSchema.methods.generateAuthToken = async function () {
  try {
    let token = JWT.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};
const AdminData = mongooose.model("ADMINS", adminSchema);

module.exports = AdminData;
