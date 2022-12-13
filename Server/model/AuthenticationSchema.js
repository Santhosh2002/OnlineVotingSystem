const mongooose = require("mongoose");
const AuthenticateSchema = new mongooose.Schema({
  voterid: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  mobilenum: {
    type: String,
    required: true,
  },
});

const AuthenticateData = mongooose.model("AUTHENTICATE", AuthenticateSchema);

module.exports = AuthenticateData;
