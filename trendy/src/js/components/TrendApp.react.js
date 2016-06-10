var TrendList = require('./TrendList.react');
var React = require('react');

var TrendApp = React.createClass({

  render: function() {
    return (
        <div className="trendapp">
          <TrendList />
        </div>
    );
  }

});

module.exports = TrendApp;
