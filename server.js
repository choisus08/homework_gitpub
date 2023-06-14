const express = require("express");
const port = 3200;
const app = express();
const drinks = require("./models/drinks"); // return what drinks.js exports
const food = require("./models/food")


app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!");
});

// Index Route
app.get("/drinks", (req, res) => {
    res.render("index.ejs", {drinks, food});
});


// Show Route
app.get("/drinks/:id", (req, res) => {
    const id = req.params.id;
    const drink = drinks[id];
    // res.send(req.params.id)
    const foodItem = food[id]
    res.render("show.ejs", {drink, foodItem});
});

app.get("/food/:id", (req, res) => {
    const id = req.params.id;
    const foodItem = food[id];
    res.render("show_food.ejs", {foodItem});
});



app.listen(3200, ()=> {
    console.log(`Listening on ${port}`);
});