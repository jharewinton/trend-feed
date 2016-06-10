var React = require('react');
var ReactDOM = require('react-dom');

var ReactPropTypes = React.PropTypes;


var TrendListItemBreakdownMap = React.createClass({
  propTypes: {
    breakdown: ReactPropTypes.array
  },

  componentDidMount: function() {
    var H = Highcharts,
        map = Highcharts.maps['countries/gb/gb-all'],
        $mapContainer = $(ReactDOM.findDOMNode(this)),
        data = this.props.breakdown.map(function(element){
          return {capital:element.name, z:element.count, lat:element.lat, lon:element.lon}
        });

    $mapContainer.highcharts('Map', {


      title: {
        text: ''
      },

      tooltip: {
        pointFormat: '{point.capital}, {point.parentState}<br>' +
        'Votes: {point.z}'
      },

      xAxis: {
        crosshair: {
          zIndex: 5,
          dashStyle: 'dot',
          snap: false,
          color: 'gray'
        }
      },

      yAxis: {
        crosshair: {
          zIndex: 5,
          dashStyle: 'dot',
          snap: false,
          color: 'gray'
        }
      },

      series: [{
        name: 'Basemap',
        mapData: map,
        borderColor: '#606060',
        nullColor: 'rgba(200, 200, 200, 0.2)',
        showInLegend: false
      }, {
        name: 'Separators',
        type: 'mapline',
        data: H.geojson(map, 'mapline'),
        color: '#101010',
        enableMouseTracking: false,
        showInLegend: false
      }, {
        type: 'mapbubble',
        dataLabels: {
          enabled: true,
          format: '{point.capital}'
        },
        name: 'Cities',
        data: data,
        maxSize: '12%',
        color: H.getOptions().colors[0]
      }]
    });

    $mapContainer.highcharts();
  },

  render: function() {

    return (
        <div id="container" className="map"></div>
    )
  }

});

module.exports = TrendListItemBreakdownMap;

