// Define a team object with private properties _players and _games
const team = {
  _players: [],
  _games: [],

  // Getter for players array
  get players() {
    return this._players;
  },

  // Getter for games array
  get games() {
    return this._games;
  },

  // Method to add a new player to the team
  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(player); // Add the new player to the _players array
  },
  
  // Method to add a new game to the team's record
  addGame(newOpponent, newTeamPoints, newOpponentPoint) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoint
    };
    this._games.push(game); // Add the new game to the _games array
  }
};

// Add initial players to the team
team._players.push(
  {
    firstName: 'Bus',
    lastName: 'Roolhoff',
    age: 78
  },
  {
    firstName: 'Malik',
    lastName: 'Dhergson',
    age: 52
  },
  {
    firstName: 'Marcy',
    lastName: 'Jinks',
    age: 41
  }
);

// Add initial games to the team's record
team._games.push(
  {
    opponent: 'DarhKorse',
    teamPoints: 2,
    opponentPoints: 88,
  },
  {
    opponent: 'DrumSetters',
    teamPoints: 7,
    opponentPoints: 26,
  },
  {
    opponent: 'MuffinManiacs',
    teamPoints: 4,
    opponentPoints: 118,
  }
);

// Add a new player using the addPlayer method
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players); // Log the updated players array

// Add a new game using the addGame method
team.addGame('Titans', 100, 98);
console.log(team._games); // Log the updated games array
