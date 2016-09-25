var React = require("react");
var ReactDOM = require("react-dom");
var ListItem = require("./ListItem.jsx");

module.exports = React.createClass({
  render:function(){
    var self = this;
    return(
      <ul>
          { 
            this.props.films.map(function(s,index){
              return(
                <ListItem info={s} key={"film"+index} clearFilter={self.props.clearFilter} />
              )         
            })
          }
      </ul>
    )
  }
});