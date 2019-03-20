const db = require("../models");
module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Burger.findAll({}).then(function (burgers) {
            console.log(burgers.length)
            res.render("index", {
                burgers: burgers
            });
        })
    })

    app.get("/api/burgers/:id", function (req, res) {
        db.Burger.findById(req.params.id).then(function (burgers) {
            res.json(burgers);
        })
    });

    app.get("/api/burgers", function (req, res) {
        db.Burger.findAll({}).then(function (burgers) {
            res.json(burgers);
        })
    })

    app.put("/api/burgers", function (req, res) {

        db.Burger.update({
            complete: true

        }, {
            where: {
                id: parseInt(req.body.id)
            }
        }).then(function (theData) {
            res.json(theData)
        })
    });



    app.delete("/api/burgers", function (req, res) {
        db.Burger.destroy({
            where: {
                id: parseInt(req.body.id)
            }
        }).then(function (burgers) {
            res.json(burgers)

        })
    });


    app.post("/api/burgers", function (req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name,
            complete: req.body.complete
        }).then(function (dbTodo) {
            res.render("index", {
                burgers: dbTodo
            });
        });
    });
}