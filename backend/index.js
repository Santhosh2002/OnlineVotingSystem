const MongoClient = require("mongodb");
  
// Server path
const url = 'mongodb://localhost:27017/';
  
// Name of the database
const dbname = "conFusion";
  
MongoClient.connect(url, (err,client)=>{
    if(!err) {
        console.log("successful connection with the server");  
    }
    else
        console.log("Error in the connectivity");
})