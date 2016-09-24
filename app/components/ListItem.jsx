var React = require("react");
var ReactDOM = require("react-dom");
var FilmInfo = require("./FilmInfo.jsx");
var actions = require("../actions/FilmActions");

module.exports = React.createClass({
    deleteFilm: function(e){
        e.preventDefault();
        actions.deleteFilm(this.props.info);
        this.props.clearFilter();
        //console.log("in Item from list get: ", typeof this.props.testItem);
    },
    showFilm: function () {
    	ReactDOM.render(<FilmInfo info={this.props.info} /> , document.getElementById("info"));
    },
    render:function(){
        //this.test2();
        return(
            <li><a href="#" onClick={this.showFilm}>{this.props.info.title}</a> ({this.props.info.year}) <span className="pull-right text-uppercase delete-button" onClick={this.deleteFilm}>&times;</span></li>
        )
    }
});