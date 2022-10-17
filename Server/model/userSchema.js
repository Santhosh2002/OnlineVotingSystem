const mongooose = require('mongoose');

const userSchema = new mongooose.Schema({
    aadharnum: {
        type: Number,
        required:true
    } 
});

const UserData = mongooose.model('USER', userSchema);

module.exports = UserData;