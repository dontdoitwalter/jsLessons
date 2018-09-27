// let netflix = {
//     id: 9,
//     name: "Super Store",
//     season1: {
//       seasonInfo: {
//         episodeInfo: [
//           { episode: 1, episodeName: "Pilot" },
//           { episode: 2, episodeName: "Magazine Profile" },
//           { episode: 3, episodeName: "Shots and Salsa" },
//           { episode: 4, episodeName: "Mannequin" },
//           { episode: 5, episodeName: "Shoplifter" },
//           { episode: 6, episodeName: "Secret Shopper" },
//           { episode: 7, episodeName: "Color Wars" },
//           { episode: 8, episodeName: "Wedding Day Sale" },
//           { episode: 9, episodeName: "All-Nighter" },
//           { episode: 10, episodeName: "Demotion" },
//           { episode: 11, episodeName: "Labor" }
//         ]
//       }
//     },
//     season2: {}
//     season3: {}
//   };

// console.log(netflix.name);
// console.log(netflix.season1.seasonInfo.episodeInfo[0]);

// console.log(netflix.season1.seasonInfo.episodeInfo[3].episode);
// console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName);


let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevil: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }

//   console.log(Object.keys(spaceJam));
//   console.log(Object.keys(spaceJam.monstars));
//   console.log(spaceJam.nbaPlayers.phoenixSuns);
// console.log(Object.values(spaceJam.nbaPlayers));

// square bracket notation
// let garden = {
//     vegetable: 'zucchini',
//     flower: 'sunflower',
//     fruit: 'grape',
//     water: true,
//     sun: true,
//     size: 10,
// };

// console.log(garden.vegetable);

// let x = 'vegetable'

// console.log(garden.x, garden[x]);
// console.log(garden.x, garden['vegetable']);

// let baking = {};
// baking['zucchini'] = 'better make some bread!';
// baking.cauliflower = 'get some hot sauce and cheese!';

// console.log(Object.keys(baking));

// let baking = {};
// baking['zucchini'] = 'better make some bread!';

// console.log(baking[garden['vegetable']]);

let garden = {
    vegetable: 'zucchini',
    flower: 'sunflower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10,
};

let key = 'water'
let x = 'vegetable'

Object.keys(garden).forEach(g => {
    if (key === g){
        console.log(garden[key]);
    }
})