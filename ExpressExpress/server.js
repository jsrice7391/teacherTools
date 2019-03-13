const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = process.env.port || 3001;


app.use(morgan('dev'))

app.use(express.static(__dirname + '/public'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get("/", (req, res) => {
    console.log(req.params)
    res.sendFile(__dirname + "/public/pages/index.html")
})

app.get("/profile", (req, res) => {
    console.log(req.params)
    res.send("This is the profile page")
})

app.get("/profile/:id", (req, res) => {
    console.log(req.params)
    res.send(`This is the profile for: ${req.params.id}`)
});

app.post("/reservation", (req, res) => {
    res.send("WE ADDED SOMETHING!!!")
})


app.listen(PORT, () => {
    console.log(`App is listening on PORT:${PORT} 🚀`)
})