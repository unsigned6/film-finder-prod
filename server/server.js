var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

//controllers
var filmController = require("./controllers/filmController");

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json())
app.use("/api", filmController);

app.listen(7777, function () {
    console.log("Started listening on port", 7777);
});

// Connect to mongodb database
//mongoose.connect("mongodb://localhost/filmfinder");
mongoose.connect("mongodb://admin:s0_s3cr3t@ds023435.mlab.com:23435/film-finder");
