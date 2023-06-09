const express = require("express");
const port = 3000;
const app = express();
const drinks = require("./models/drinks"); // return what drinks.js exports

app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!");
});

app.get("/drinks", (req, res) => {
    res.render("index.ejs", {drinks});
})


app.listen(3000, ()=> {
    console.log(`Listening on ${port}`);
});