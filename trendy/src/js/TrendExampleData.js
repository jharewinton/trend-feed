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
            lat: 51.280233,
            lon: 1.0789089
          },{
            name: 'Carmarthen East and Dinefwr',
            count: 280,
            lat: 51.85762,
            lon: -4.312131
          },{
            name: 'Banbury',
            count: 609,
            lat: 52.0629009,
            lon: -1.339775
          },{
            name: 'Islington South and Finsbury',
            count: 1059,
            lat: 51.5465063,
            lon: -0.1058058
          },{
            name: 'Guildford',
            count: 200,
            lat: 51.23622,
            lon: -0.570409
          },{
            name: 'Scunthorpe',
            count: 297,
            lat: 53.588646,
            lon: -0.654413
          },{
            name: 'Merthyr Tydfil and Rhymney',
            count: 201,
            lat: 51.8622523,
            lon: -4.3945034
          },{
            name: 'Wokingham',
            count: 591,
            lat: 51.410457,
            lon: -0.833861
          }
        ]
      },
      {
        type: 'petition',
        name: 'Everyone should have a free fluffy sheep',
        description: 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that\'s what you see at a toy store. And you must think you\'re in a toy store, because you\'re here shopping for an infant named Jeb.',
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
        name: 'More worker\'s rights for Goblins',
        description: 'Now that we know who you are, I know who I am. I\'m not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain\'s going to be? He\'s the exact opposite of the hero. And most times they\'re friends, like you and me! I should\'ve known way back when... You know why, David? Because of the kids. They called me Mr Glass.',
        signatureCount: 23978432,
        url: '',
        timestamp: Date.now() - 99999,
        constituencyCounts: [
          {
            name: 'Mordor',
            count: 213324
          },{
            name: 'Klendathu',
            count: 124
          },{
            name: 'Toy town',
            count: 234
          }
        ]
      },
      {
        type: 'petition',
        name: 'Better roads to Mt. Doom',
        description: 'Well, the way they make shows is, they make one show. That show\'s called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they\'re going to make more shows. Some pilots get picked and become television programs. Some don\'t, become nothing. She starred in one of the ones that became nothing.',
        signatureCount: 23978432,
        url: '',
        timestamp: Date.now() - 99999,
        constituencyCounts: [
          {
            name: 'The Shire',
            count: 32443
          },{
            name: 'Mina Tirith',
            count: 324
          },{
            name: 'Edorath',
            count: 243
          }
        ]
      }
    ]));
  }

};
