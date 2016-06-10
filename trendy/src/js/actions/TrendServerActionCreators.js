var TrendAppDispatcher = require('../dispatcher/TrendAppDispatcher');

module.exports = {

  receiveAll: function(rawItems) {
    TrendAppDispatcher.dispatch({
      type: 'receiveAll',
      rawItems: rawItems
    });
  }

};