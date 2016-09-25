var React = require("react");
var ReactDOM = require("react-dom");
var FilmsList = require("./components/FilmsList.jsx");
var filmsStore = require("./stores/filmsStore");
var listController = require("./listController.js");

var _films = [];
var _filmsFiltered = [];
//var wasSorted = false;
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
  //_films = filtered ? _filmsFiltered : _films;
  sortedFilms = _films.slice();
  //sortObjectsArray(sortedFilms);
  listController.sortObjectsArray(sortedFilms);
  //wasSorted = true;
  render(sortedFilms);
}

/*function sortObjectsArray(arr) {
  arr.sort(function (a, b) {
    var A = a.title.toLowerCase() , B = b.title.toLowerCase();
    if (A > B) {
      return 1;
    }
    if (A < B) {
      return -1;
    }
    return 0;
  });
}*/

var _searchByTitle = function(titleFilter) {
  var filmsFiltered = filtered ? _filmsFiltered : _films;
  filtered = true;

  _filmsFiltered = listController.searchByTitle(_films, titleFilter);

  /*_filmsFiltered = _films.filter(function (film) {
    if(film.title.toLowerCase().startsWith(titleFilter.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });*/
  render(_filmsFiltered);

  //filtered = false;
}

var _searchByStar = function(starFilter) {
  var filmsFiltered = filtered ? _filmsFiltered : _films;
  filtered = true;
  _filmsFiltered = listController.searchByStar(filmsFiltered, starFilter);
  /*_filmsFiltered = filmsFiltered.filter(function(film) {
    var result = film.stars.some(function(star) {
      var starArr = star.toLowerCase().split(" ");
      for(var i=0; i < starArr.length; i++) {
        if(starArr[i].startsWith(starFilter)) {
          return true;
        }
      }
      return false; 
    })
    return result;
  })*/

  //console.log("filteredTest", _filmsFiltered);
  render(_filmsFiltered);
}

