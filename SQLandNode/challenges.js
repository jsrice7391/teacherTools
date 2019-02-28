var mysql = require("mysql")

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "quotes_db"
});

//Create a function that shows all the items

// Create a function that shows all of the items with a dynamic "WHERE" statemenrt

// Create a function that takes an argument of the item and the amount to update

// Create a function that deletes a specific item.

// Write a funciton that takes the items and allows the user to specify ascending or descending.