var React = require("react");
var actions = require("../actions/FilmActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          title:"",
          year: "",
          format:"",
          stars:[]
      }  
    },
    addFilm:function(e){
        e.preventDefault();
        actions.addFilm(this.state);
        console.log("State of AddFilm: ", this.state);
        this.setState(this.getInitialState());
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;

      var state = this.state;

      if(name === "stars") {
        state[name] = e.target.value.split(",");
      } else {
        state[name] = e.target.value;
      }
      this.setState(state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addFilm}>
                <div className="form-group">
                    <label className="control-label" htmlFor="title">Film Title:</label>
                    <input type="text" className="form-control" id="title" name="title" value={this.state.title} onChange={this.handleInputChange} placeholder="Film Title" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="year">Year:</label>
                    <input type="text" className="form-control" id="year" name="year" value={this.state.year} onChange={this.handleInputChange} placeholder="Year" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="format">Format:</label>
                    <input type="text" className="form-control" id="format" name="format" value={this.state.format} onChange={this.handleInputChange} placeholder="Format" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="stars">Actors:</label>
                    <input type="text" className="form-control" id="stars" name="stars" value={this.state.stars} onChange={this.handleInputChange} placeholder="Stars" />                    
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Film</button>
                </div>
            </form>
        )
    }
})