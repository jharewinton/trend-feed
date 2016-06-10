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


  getInitialState: function(){
    return {
      collapsed: true
    }
  },

  toggleContent: function(){
    this.setState( { collapsed : !this.state.collapsed } );
  },

  render: function() {
    var item = this.props.item;
    var trendListItemBreakdowns = item.constituencyCounts.map(getTrendListItemBreakdown);
    return (
      <li className="item">
        <div className="flag">
          <div className="flag__item">
            <p className="item__number">{item.id + 1}</p>
          </div>
          <div className="flag__content">
            <h3 className="item__name">{item.name}</h3>
            <p className="item__description">{item.description}</p>
            <p className="item__count">Total Signatures: {item.signatureCount}</p>
          </div>
        </div>
        <div className="collapsible">
          <button className="collapsible__btn" onClick={this.toggleContent}>Show breakdown by constituency</button>
          <div className={this.state.collapsed ? "collapsible__content" : "collapsible__content--active collapsible__content"}>
            {trendListItemBreakdowns}
          </div>
        </div>
      </li>
    );
  }

});

module.exports = TrendListItem;
