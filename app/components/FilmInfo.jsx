var React = require("react");

module.exports = React.createClass({
  render:function () {
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          {this.props.info.title}
        </div>
        <div className="panel-body">
          <strong>Year:</strong> {" "+this.props.info.year}<br/>
          <strong>Format:</strong> {" "+this.props.info.format}<br/>
          <strong>Stars:</strong>
          <ul>
            {
              this.props.info.stars.map(function (s, index) {
                return(
                  <li key={"star"+index}>{s}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
/*    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                </div>
                <div className="panel-body">
                    Year: {this.props.info.year}
                    Format: {this.props.info.format}
                    <ul>
                        {
                            this.props.info.actors.map(function (s, index) {
                                return(
                                    <li>s</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }*/
})