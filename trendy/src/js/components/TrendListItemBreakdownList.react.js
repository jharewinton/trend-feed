var React = require('react');

var ReactPropTypes = React.PropTypes;

function formatBreakdown(breakdown) {
  return (<div className="breakdown">
            <h5 className="breakdown__title">{breakdown.name}</h5>
            <p className="breakdown__content">Signatures : <span className="text-blue">{breakdown.count}</span></p>
          </div>);
}

var TrendListItemBreakdownList = React.createClass({

  propTypes: {
    constituencyCounts: ReactPropTypes.array
  },
  render: function() {
    var breakdown = this.props.constituencyCounts;
    var formattedBreakdowns = breakdown.map(formatBreakdown);
    return (
      <div>
        {formattedBreakdowns}
      </div>
    );
  }

});

module.exports = TrendListItemBreakdownList;

