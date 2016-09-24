var mongoose = require("mongoose");
var Film = require("../data/film");
var _ = require("underscore");

var router = require("express").Router();
router.route("/films/:id?").get(getFilms).post(addFilm).delete(deleteFilm);

function getFilms(req, res) {
    Film.find(function (err, films) {
        if (err)
            res.send(err);
        else
            res.json(films);
    });
}

function addFilm(req, res) {
    var film = new Film(_.extend({}, req.body));
    film.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(film);
    });
}

function deleteFilm(req, res) {
    var id = req.params.id;
    Film.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;