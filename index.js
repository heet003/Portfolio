const express = require('express');
const bodyParser = require('body-parser');
// import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", async (req, res) => {
    res.render("index.ejs");
});

app.get("/quiz", async (req, res) => {
    res.render("quiz.ejs");
});
app.get("/travel", async (req, res) => {
    res.render("travel.ejs");
});
app.get("/todo", async (req, res) => {
    res.render("to-do.ejs");
});
app.get("/blog", async (req, res) => {
    res.render("blog.ejs");
});

app.get("/home", async (req, res) => {
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});