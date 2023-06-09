const express = require("express");
const port = 3000;
const app = express();
const drinks = require("./models/drinks"); // return what drinks.js exports

app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!");
});

// Index Route
app.get("/drinks", (req, res) => {
    res.render("index.ejs", {drinks});
});

// Show Route
app.get("/drinks/:id", (req, res) => {
    const id = req.params.id;
    const drink = drinks[id];
    // res.send(req.params.id)
    res.render("show.ejs", {drink});
});


app.listen(3000, ()=> {
    console.log(`Listening on ${port}`);
});