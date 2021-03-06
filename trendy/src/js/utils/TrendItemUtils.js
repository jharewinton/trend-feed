module.exports = {

  convertRawItem: function(rawItem) {
    return {
      id: rawItem.id,
      name: rawItem.name,
      type: rawItem.type,
      date: new Date(rawItem.timestamp),
      description: rawItem.description,
      signatureCount: rawItem.signatureCount,
      url: rawItem.url,
      constituencyCounts: rawItem.constituencyCounts
    };
  }

};