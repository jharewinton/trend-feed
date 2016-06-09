module.exports = {

  convertRawItem: function(rawItem) {
    return {
      id: rawItem.id,
      type: rawItem.type,
      date: new Date(rawItem.timestamp),
      text: rawItem.text,
      count: rawItem.count
    };
  }

};