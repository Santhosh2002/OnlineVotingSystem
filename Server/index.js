const express = require('express');
const app = express();

const PORT = 8000;
const dotenv = require("dotenv");
dotenv.config({ path: './config.env' });

require('./db/conn');
app.use(express.json());

app.use(require('./router/auth'));


// app.get('/about', (req, res) => {
//     res.send('Hello');
// });

app.listen(PORT, function () {
    console.log("Server is running on PORT: " + PORT);
});

    