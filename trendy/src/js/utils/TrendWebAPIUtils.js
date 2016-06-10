var TrendServerActionCreators = require('../actions/TrendServerActionCreators');
var TrendExampleData = require('../TrendExampleData');

module.exports = {

  getAllItems: function() {
      // var apiUrl = 'http://ec2-52-208-100-223.eu-west-1.compute.amazonaws.com:9000/api/petitions';
      // // Get items from the API
      // var myHeaders = new Headers();
      //
      // var myInit = { method: 'GET',
      //   headers: myHeaders,
      //   mode: 'cors',
      //   cache: 'default' };
      //
      // fetch(apiUrl, myInit)
      //     .then(rawItems => {console.log(rawItems);
      //
      //       TrendServerActionCreators.receiveAll(rawItems);
      //     }).catch((err) => console.error('Error: ' + err));

    // simulate retrieving data from a database
    var rawItems = JSON.parse(localStorage.getItem('items'));
    console.log(rawItems);

    // simulate success callback
    TrendServerActionCreators.receiveAll(rawItems);
  }
};