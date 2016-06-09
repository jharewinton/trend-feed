var React = require('react');

var ReactPropTypes = React.PropTypes;

var TrendListItem = React.createClass({

  propTypes: {
    item: ReactPropTypes.object
  },

  render: function() {
    var item = this.props.item;
    console.log(item);
    return (
      <li className="item flag">
        <div className="flag__item">
        </div>
        <div className="flag__content">
          <h3 className="item__name">{item.text}</h3>
          <p className="item__count">{item.count}</p>
        </div>
      </li>
    );
  }

});

module.exports = TrendListItem;
