const luke = {
  id: "1",
  type: "Human",
  name: "Luke Skywalker",
  homePlanet: "Tatooine",
  birthYear: -19,
  friends: [ "2", "3" ],
  appearsIn: [ 4, 5, 6, 7, 8 ]
};

const han = {
  id: "3",
  type: "Human",
  name: "Han Solo",
  homePlanet: "Corellia",
  birthYear: -30,
  friends: [ "1", "2" ],
  appearsIn: [ 4, 5, 6, 7 ]
};

const vader = {
  id: "4",
  type: "Human",
  name: "Anakin Skywalker",
  homePlanet: "Tatooine",
  birthYear: -41,
  friends: [ "5" ],
  appearsIn: [ 1, 2, 3, 4, 5, 6 ]
};

const emperor = {
  id: "5",
  type: "Human",
  name: "Palpatine",
  homePlanet: "Naboo",
  birthYear: -82,
  friends: [ "4" ],
  appearsIn: [ 1, 2, 3, 4, 5, 6 ]
};

const r2d2 = {
  id: "2",
  type: "Droid",
  name: "R2-D2",
  manufacturer: "Industrial Automaton",
  appearsIn: [ 1, 2, 3, 4, 5, 6, 7, 8 ],
  friends: []
}

var humans = {
  "1": luke,
  "3": han,
  "4": vader,
  "5": emperor
};

const droids = {
  "2": r2d2
};

function getCharacter(id) {
  return (humans[id] || droids[id]);
}

function getFriends(character, appearsIn = null) {
  let friends = character.friends.map((id) => getCharacter(id));

  if (appearsIn !== null) {
    friends = friends.filter((friend) => friend.appearsIn.includes(appearsIn));
  }

  return friends;
}

function createHuman(human) {
  console.log('CreateHuman', human);

  humans[human.id] = {
    id: human.id,
    type: "Human",
    name: human.name,
    homePlanet: "Unknown",
    birthYear: human.birthYear,
    friends: [],
    appearsIn: []
  };

  return humans[human.id];
}

module.exports = {
  getCharacter,
  getFriends,
  createHuman
};
