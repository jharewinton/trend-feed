module.exports = {

  init: function() {
    localStorage.clear();
    localStorage.setItem('items', JSON.stringify([
      {
        id: '1',
        type: 'petition',
        text: 'Everyone should have a free fluffy sheep',
        count: 23978432,
        timestamp: Date.now() - 99999
      },
      {
        id: '2',
        type: 'petition',
        text: 'Ban crocs',
        count: 578432,
        timestamp: Date.now() - 99999
      },
      {
        id: '3',
        type: 'petition',
        text: 'Something silly',
        count: 68432,
        timestamp: Date.now() - 99999
      },
      {
        id: '4',
        type: 'petition',
        text: 'This is also a petition',
        count: 8432,
        timestamp: Date.now() - 99999
      }
    ]));
  }

};