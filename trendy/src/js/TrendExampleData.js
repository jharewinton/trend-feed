module.exports = {

  init: function() {
    localStorage.clear();
    localStorage.setItem('items', JSON.stringify([
      {
        type: 'petition',
        name: 'Everyone should have a free fluffy sheep',
        description: 'ljshgjsakdfgjkhasfd',
        signatureCount: 23978432,
        url: '',
        timestamp: Date.now() - 99999,
        constituencyCounts: {}
      },
      {
        type: 'petition',
        name: 'Everyone should have a free fluffy sheep',
        description: 'ljshgjsakdfgjkhasfd',
        signatureCount: 23978432,
        url: '',
        timestamp: Date.now() - 99999,
        constituencyCounts: {
          name: 'lishjdfkdsf',
          count: 213324
        }
      },
      {
        type: 'petition',
        name: 'Everyone should have a free fluffy sheep',
        description: 'ljshgjsakdfgjkhasfd',
        signatureCount: 23978432,
        url: '',
        timestamp: Date.now() - 99999,
        constituencyCounts: {
          name: 'lishjdfkdsf',
          count: 213324
        }
      },
      {
        type: 'petition',
        name: 'Everyone should have a free fluffy sheep',
        description: 'ljshgjsakdfgjkhasfd',
        signatureCount: 23978432,
        url: '',
        timestamp: Date.now() - 99999,
        constituencyCounts: {
          name: 'lishjdfkdsf',
          count: 213324
        }
      }
    ]));
  }

};