var TrendListItemBreakdown = require('./TrendListItemBreakdown.react');
var React = require('react');

var ReactPropTypes = React.PropTypes;

function getTrendListItemBreakdown(constituencyCount) {
  return (
      <TrendListItemBreakdown
          breakdown={constituencyCount}
      />
  );
}

var TrendListItem = React.createClass({

  propTypes: {
    item: ReactPropTypes.object
  },

  render: function() {
    var item = this.props.item;
    var trendListItemBreakdowns = item.constituencyCounts.map(getTrendListItemBreakdown);
    return (
      <li className="item flag">
        <div className="flag__item">
        </div>
        <div className="flag__content">
          <h3 className="item__name">{item.text}</h3>
          <p className="item__count">{item.count}</p>
        </div>
        <div className="collapsible">
          <button className="collapsible__btn">Show breakdown by constituency</button>
          <div class="collapsible__content">
            {trendListItemBreakdowns}
          </div>
        </div>
      </li>
    );
  }

});

module.exports = TrendListItem;
