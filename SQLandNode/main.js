require("dotenv").config();
const mysql = require("mysql");

let connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "quotes_db"
});

connection.connect();

connection.query("SELECT * FROM quotes;", function (error, results, fields) {
    if (error) throw error;
    results.forEach(quote => {
        console.log("------------")
        console.log(quote.quote)
    })
});


connection.end();