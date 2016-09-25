var React = require("react");
var ReactDOM = require("react-dom");
var FilmsList = require("./components/FilmsList.jsx");
var filmsStore = require("./stores/filmsStore");
var listController = require("./listController.js");

var _films = [];
var _filmsFiltered = [];
var filtered = false;

var getFilmsCallback = function(films){
  _films = films;
  render(_films);
};

filmsStore.onChange(getFilmsCallback);

function render(filmsForRender){
    ReactDOM.render(<FilmsList films={filmsForRender} sorFilmsList={_sorFilmsList} searchByTitle={_searchByTitle} searchByStar={_searchByStar} />, document.getElementById("container"));
}

var _sorFilmsList = function() {
  sortedFilms = _films.slice();
  listController.sortObjectsArray(sortedFilms);
  render(sortedFilms);
}

var _searchByTitle = function(titleFilter) {
  var filmsFiltered = filtered ? _filmsFiltered : _films;
  filtered = true;
  _filmsFiltered = listController.searchByTitle(_films, titleFilter);
  render(_filmsFiltered);
}

var _searchByStar = function(starFilter) {
  var filmsFiltered = filtered ? _filmsFiltered : _films;
  filtered = true;
  _filmsFiltered = listController.searchByStar(filmsFiltered, starFilter);
  render(_filmsFiltered);
}

