var exports = module.exports = {}

exports.sortObjectsArray = function(arr) {
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
}

exports.searchByTitle = function(arr, titleFilter) {
  var filtered_arr = arr.filter(function (film) {
    if(film.title.toLowerCase().startsWith(titleFilter.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });
  return filtered_arr;
}

exports.searchByStar = function(arr, starFilter) {
  starFilter = starFilter.toLowerCase();
  var filtered_arr = arr.filter(function(film) {
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
  });
  return filtered_arr;
}