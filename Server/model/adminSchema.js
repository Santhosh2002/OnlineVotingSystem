const mongooose = require("mongoose");

const adminSchema = new mongooose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    reruired: true,
  },
});

const AdminData = mongooose.model("ADMIN", adminSchema);

module.exports = AdminData;
