var TrendListItem = require('./TrendListItem.react');
var React = require('react');
var TrendItemStore = require('../stores/TrendItemStore');

function getStateFromStores() {
  return {
    items: TrendItemStore.getAll()
  };
}

function getTrendListItem(item) {
  return (
      <TrendListItem
          key={item.id}
          item={item}
      />
  );
}

var TrendList = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    this._scrollToBottom();
    TrendItemStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TrendItemStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var trendListItems = this.state.items.map(getTrendListItem);
    console.log(trendListItems);
    return (
        <div className="trend-list">
          <h3 className="trend-list__heading">Current Trends</h3>
          <ul className="trend-list__items" ref="TrendList">
            {trendListItems}
          </ul>
        </div>
    );
  },

  componentDidUpdate: function() {
    this._scrollToBottom();
  },

  _scrollToBottom: function() {
    var ul = this.refs.TrendList;
    ul.scrollTop = ul.scrollHeight;
  },

  /**
   * Event handler for 'change' events coming from the ItemStore
   */
  _onChange: function() {
    this.setState(getStateFromStores());
  }

});

module.exports = TrendList;