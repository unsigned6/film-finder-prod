var React = require("react");
var ReactDOM = require("react-dom");
var FilmInfo = require("./FilmInfo.jsx");
var AddFilm = require("./AddFilm.jsx");
var List = require("./List.jsx");
var Dropzone = require("./Dropzone.jsx");

module.exports = React.createClass({
  getInitialState:function(){    
    return  {
      titleSearch: "", 
      starSearch: ""
    };
  },
  sortByTitle:function() {
    this.props.sorFilmsList();
  },
  searchByTitle:function() {
    this.props.searchByTitle(this.state.titleSearch);
  },
  searchByStar:function() {
    this.props.searchByStar(this.state.starSearch);
  },
  clearFilter:function(argument) {
    this.setState(this.getInitialState());
  },
  handleInputChange: function(e){
    e.preventDefault();
    var name = e.target.name;
    var state = this.state;

    state[name] = e.target.value;
    this.setState(state);
    this.searchByTitle();
    this.searchByStar();
  },
  render:function(){
    return(
      <div className="row">
 
        <div className="col-md-6">
          <div id="info">.</div>
          <div id="add-new" className="row">
            <div className="col-md-7"><AddFilm /></div>
            <div className="col-md-5" id="dropzone"><Dropzone /></div>
          </div>
        </div>
 
        <div className="col-md-6">
          <div id="film-list-panel" className="panel panel-default">

            <div className="panel-heading">
              Films List | <a href="#" onClick={this.sortByTitle}>A-Z</a> |
              <div className="pull-right">
              <input autoComplete="off" type="text" name="titleSearch" value={this.state.titleSearch} onChange={this.handleInputChange} placeholder="Search Title" />
              <input autoComplete="off" type="text" name="starSearch" value={this.state.starSearch} onChange={this.handleInputChange} placeholder="Search Star" />
              </div>
            </div>
            <div className="panel-body">
              <List films={this.props.films} clearFilter={this.clearFilter} />
              
            </div>
          </div>  
      </div>
    </div>
    )
  } 
});