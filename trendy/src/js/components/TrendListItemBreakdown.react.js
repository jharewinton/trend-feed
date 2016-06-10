var React = require('react');
var TrendListItemBreakdownMap = require('./TrendListItemBreakdownMap.react');
var TrendListItemBreakdownList = require('./TrendListItemBreakdownList.react');

var ReactPropTypes = React.PropTypes;

var TrendListItemBreakdown = React.createClass({

  propTypes: {
    item: ReactPropTypes.object
  },

  getInitialState: function(){
    return {
      mapView: false
    }
  },

  toggleMap: function(){
    this.setState( { mapView : !this.state.mapView } );
  },

  render: function() {
    var item = this.props.item;

    var breakdownView = null;
    if (this.state.mapView) {
      breakdownView = <TrendListItemBreakdownMap
          breakdown={item.constituencyCounts}
            />;
    } else {
      breakdownView = <TrendListItemBreakdownList
              constituencyCounts={item.constituencyCounts}
            />
    }

    return (
        <div>
          <button className="btn" onClick={this.toggleMap}>Toggle map view</button>
          {breakdownView}
        </div>
    );
  }

});

module.exports = TrendListItemBreakdown;

