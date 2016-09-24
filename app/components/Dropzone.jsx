var React = require('react');
var Dropzone = require('react-dropzone');
var actions = require("../actions/FilmActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
        arrayToInsert: []
      };
    },

    addFilm:function(){
      for(item in this.state.arrayToInsert) {
        actions.addFilm(this.state.arrayToInsert[item]);
        console.log("item: ", this.state.arrayToInsert[item]);
      }
    },

    parseFileToJSON:function (contets) {
      var lines = contets.split('\n');
      var film = {};

      var result = [];
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i].split(": ");

        if(line[0] === "Stars") {
          film[line[0].toLowerCase()] = line[1].split(", ");
          result.push(film);
          film={};
        } else if(line[0] === "Release Year"){
          film["year"] = line[1];
        } else if(line[0] === "") {
          continue;
        } else {
          film[line[0].toLowerCase()] = line[1];
        }
      };
      console.log("result of parseFileToJSON: ", result);
      return result;
    },

    onDrop: function (files) {
      var self = this;
      var file = files[0];   
      var reader = new FileReader();

      reader.readAsText(file);

      reader.addEventListener("loadend", function() {
      });      

      reader.onload = function(event) {
        var contents = event.target.result;

        self.state={arrayToInsert: self.parseFileToJSON(contents)};

        self.addFilm();
      };

      reader.onerror = function(event) {
        console.error("File could not be read! Code " + event.target.error.code);
      };
    },

    render: function () {
      return (
          <div>
            <Dropzone onDrop={this.onDrop}>
              <div>Drop your film-library file here, or click to select it to upload.</div>
            </Dropzone>
          </div>
      );
    }
});