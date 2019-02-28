require("dotenv").config();
const mysql = require("mysql");

let connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "quotes_db"
});

console.log(process.env)
connection.connect();

connection.query("SELECT * FROM quotes;", function (error, results, fields) {
    if (error) throw error;
    results.forEach(result => {
        console.log("------------")
        console.log(result.quote)
    })
});


connection.end();;