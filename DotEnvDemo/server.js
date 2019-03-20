const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./models");

var PORT = process.env.PORT || 8000;


// Allow boy barser to parse the data
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Allow the assets folder to be used for static content
app.use("/assets", express.static("assets"));

// Establish the engine as Handlebars and useing the Default view as the main.handlebars file
app.engine("handlebars", hbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

// Create some routers
require("./controller/routes.js")(app);



// Start the app
db.sequelize.sync()
    .then(() => app.listen(PORT, function () {
        console.log("APP is listening on Port: " + PORT);
    }));