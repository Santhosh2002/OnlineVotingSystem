const mongoose = require('mongoose');

const DB = "mongodb+srv://santhosh:santhosh@cluster0.86cs4ti.mongodb.net/onlinevotingsystem?retryWrites=true&w=majority";

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connection successful');
}).catch((err) => {
    console.log('no connection')
});