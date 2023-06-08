const express = require("express");
const port = 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})


app.listen(3000, ()=> {
    console.log(`Listening on ${port}`)
})