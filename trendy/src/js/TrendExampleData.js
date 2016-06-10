module.exports = {

  init: function() {
    localStorage.clear();
    localStorage.setItem('items', JSON.stringify([
      {
        type: 'petition',
        name: 'Consider a vote of No Confidence in Jeremy Hunt, Health Secretary',
        description: 'Mr Hunt recently gave totally inappropriate advice to Google conditions before seeking medical opinion. He referred to Paramedics as Ambulance Drivers and has caused the first Doctors strike in years of the NHS. Mr Hunt is destroying all staff morale in the NHS & will cause recruitment issues.',
        signatureCount: 335504,
        url: 'https://petition.parliament.uk/petitions/121152.json',
        timestamp: Date.now() - 99999,
        constituencyCounts: [
          {
            name: 'Canterbury',
            count: 816,
            latitude: 1.0789089,
            longitude: 51.280233
          },{
            name: 'Carmarthen East and Dinefwr',
            count: 280,
            latitude: 51.85762,
            longitude: -4.312131
          },{
            name: 'Banbury',
            count: 609,
            latitude: 52.0629009,
            longitude: -1.339775
          },{
            name: 'Islington South and Finsbury',
            count: 1059,
            latitude: 51.5465063,
            longitude: -0.1058058
          },{
            name: 'Guildford',
            count: 200,
            latitude: 51.23622,
            longitude: -0.570409
          },{
            name: 'Scunthorpe',
            count: 297,
            latitude: 53.588646,
            longitude: -0.654413
          },{
            name: 'Merthyr Tydfil and Rhymney',
            count: 201,
            latitude: 51.8622523,
            longitude: -4.3945034
          },{
            name: 'Wokingham',
            count: 591,
            latitude: 51.410457,
            longitude: -0.833861
          }
        ]
      },
      {
        type: 'petition',
        name: 'Everyone should have a free fluffy sheep',
        description: 'ljshgjsakdfgjkhasfd',
        signatureCount: 23978432,
        url: '',
        timestamp: Date.now() - 99999,
        constituencyCounts: [
          {
            name: 'lishjdfkdsf',
            count: 213324
          },{
            name: 'lishjdfkdsf',
            count: 213324
          },{
            name: 'lishjdfkdsf',
            count: 213324
          }
        ]
      },
      {
        type: 'petition',
        name: 'Everyone should have a free fluffy sheep',
        description: 'ljshgjsakdfgjkhasfd',
        signatureCount: 23978432,
        url: '',
        timestamp: Date.now() - 99999,
        constituencyCounts: [
          {
            name: 'lishjdfkdsf',
            count: 213324
          },{
            name: 'lishjdfkdsf',
            count: 213324
          },{
            name: 'lishjdfkdsf',
            count: 213324
          }
        ]
      },
      {
        type: 'petition',
        name: 'Everyone should have a free fluffy sheep',
        description: 'ljshgjsakdfgjkhasfd',
        signatureCount: 23978432,
        url: '',
        timestamp: Date.now() - 99999,
        constituencyCounts: [
          {
            name: 'lishjdfkdsf',
            count: 213324
          },{
            name: 'lishjdfkdsf',
            count: 213324
          },{
            name: 'lishjdfkdsf',
            count: 213324
          }
        ]
      }
    ]));
  }

};