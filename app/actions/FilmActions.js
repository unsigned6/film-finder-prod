var dispatcher = require("../dispatcher");

module.exports = {
    addFilm:function(film){
        dispatcher.dispatch({
           film:film,
           type:"film:addFilm" 
        });
    },
    deleteFilm:function(film){
        dispatcher.dispatch({
           film:film,
           type:"film:deleteFilm" 
        });
    }
}