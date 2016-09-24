var mongoose = require("mongoose");
var filmSchema = mongoose.Schema({
	title: {type: String, index: { unique: true, dropDups: true }},
	year: String,
	format: String,
	stars: Array
});

module.exports = mongoose.model("film", filmSchema);