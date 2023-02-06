const mongooose = require("mongoose");

const electionlistSchema = new mongooose.Schema({
  Type: {
    type: String,
    required: true,
  },
  State: {
    type: String,
    reruired: true,
  },
  Date: {
    type: Date,
    reruired: true,
  },
  Status: {
    type: String,
    reruired: true,
  },
  qualities: {
    type: String,
    reruired: true,
  },
});

const ElectionListData = mongooose.model("Elections", electionlistSchema);

module.exports = ElectionListData;
