const express = require('express');
require("dotenv").config();
const app = express();
const connect = require('./db');

connect();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, ()=> {
    console.log(`Server started on port ${PORT} successfully!`);
});