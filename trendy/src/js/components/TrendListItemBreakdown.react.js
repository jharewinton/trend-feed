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
        <h5 class="breakdown__title">{breakdown.name}</h5>
        <p class="breakdown__content">{breakdown.count}</p>
      </div>
    );
  }

});

module.exports = TrendListItemBreakdown;

