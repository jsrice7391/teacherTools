require("dotenv").config();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'my_db'
});

connection.connect();

connection.end();