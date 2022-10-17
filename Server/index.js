const express = require('express');
// const router = require('./router/auth');
const app = express();
const PORT = 8000;

require('./db/conn');

// require('./model/userSchema');
app.use(express.json());

app.use(require('./router/auth'));

const middleware = (req, res, next) => {
    console.log('hellow middleware');
    next();
}

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/about',middleware, (req, res) => {
    res.send('Hello');
});

app.listen(PORT, function () {
    console.log("Server is running on PORT: " + PORT);
});

    