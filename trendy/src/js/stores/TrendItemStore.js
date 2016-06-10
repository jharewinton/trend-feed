var TrendAppDispatcher = require('../dispatcher/TrendAppDispatcher');
var TrendItemUtils = require('../utils/TrendItemUtils');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _items = {};

function _addItems(rawItems) {
  rawItems.forEach(function(item) {
    console.log(item);
    if (!_items[item.id]) {
      _items[item.id] = TrendItemUtils.convertRawItem(item);
    }
  });
}

var TrendItemStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  get: function(id) {
    return _items[id];
  },

  getAll: function() {
    var _itemsArray = [];

    for (var item in _items) {
      _itemsArray.push(_items[item]);
    }

    return _itemsArray;
  }
});

TrendItemStore.dispatchToken = TrendAppDispatcher.register(function(action) {

  if (action.type === 'receiveAll') {
    _addItems(action.rawItems);
    TrendItemStore.emitChange();
  }

});

module.exports = TrendItemStore;