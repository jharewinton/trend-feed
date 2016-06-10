var React = require('react');

var ReactPropTypes = React.PropTypes;


var TrendListItemBreakdown = React.createClass({

  propTypes: {
    breakdown: ReactPropTypes.object
  },
  render: function() {
    var breakdown = this.props.breakdown;
    return (
      <div className="breakdown">
        <h5 className="breakdown__title">{breakdown.name}</h5>
        <p className="breakdown__content">Signatures : <span className="text-blue">{breakdown.count}</span></p>
      </div>
    );
  }

});

module.exports = TrendListItemBreakdown;

