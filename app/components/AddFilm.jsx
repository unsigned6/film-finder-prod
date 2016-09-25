var React = require("react");
var actions = require("../actions/FilmActions");

module.exports = React.createClass({

    getInitialState:function(){
      return {
          title:"",
          year: "",
          format:"VHS",
          stars:[]
      }  
    },

    addFilm:function(e){
        e.preventDefault();
        if(this.state.title === "" || this.state.year === "" || this.state.format === ""  || this.state.stars.length === 0){
          console.log("this.state: ", this.state);
          alert("Fields should not be blank.");
        } else {
          this.state.stars = this.state.stars.filter(v=>v!="");
          console.log(this.state);
          this.setState(this.state);
          actions.addFilm(this.state);
          console.log("State of AddFilm: ", this.state);
          this.setState(this.getInitialState());
        }
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
                    <input type="text" pattern='[a-zA-Z0-9-:,.()\!\?]+' title='english letters, dash: "-" , comma: "," , dot: "." , question: "?" or exclamation mark "!" , brakes: "()" or colon: ":"'  className="form-control" id="title" name="title" value={this.state.title} onChange={this.handleInputChange} placeholder="Film Title" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="year">Year:</label>
                    <input type="number" min="1890" max="2020" className="form-control" id="year" name="year" value={this.state.year} onChange={this.handleInputChange} placeholder="Year" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="format">Format:</label>
                     <select className="form-control"  id="format" name="format"  value={this.state.format} onChange={this.handleInputChange}>
                      <option value="VHS">VHS</option>
                      <option value="DVD">DVD</option>
                      <option value="Blue-Ray">Blue-Ray</option>
                    </select> 
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="stars">Actors:</label>
                    <input type="text" pattern='[a-zA-Z-.,]+' title="Actor's can heve english letters, dash: '-' , dot: '.' & be separated by comma: ','" className="form-control" id="stars" name="stars" value={this.state.stars} onChange={this.handleInputChange} placeholder="Stars" />                    
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Film</button>
                </div>
            </form>
        )
    }
})