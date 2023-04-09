const mongooose = require("mongoose");

const electionSchema = new mongooose.Schema({
  party: {
    type: String,
    required: true,
  },
  candidate: {
    type: String,
    reruired: true,
  },
  qualifications: {
    type: String,
    reruired: true,
  },
  aadharnum: {
    type: Number,
    reruired: true,
  },
  gender: {
    type: String,
    reruired: true,
  },
  age: {
    type: String,
    reruired: true,
  },
  qualities: {
    type: String,
    reruired: true,
  },
});

const ElectionData = mongooose.model("ElectionData", electionSchema);

module.exports = ElectionData;
