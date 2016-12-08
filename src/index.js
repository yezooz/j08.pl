import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GOALKEEPER, DEFENDER, MIDFIELDER, ATTACKER } from './components/player_position';
import PlayerList from './components/player_list';

const players = [
  {
    number: 1,
    name: "Jakub Zieliński",
    position: GOALKEEPER
  },
  {
    number: 2,
    name: "Mateusz Bąk",
    position: MIDFIELDER
  },
  {
    number: 3,
    name: "Nikodem Bronicki",
    position: MIDFIELDER
  },
  {
    number: 4,
    name: "Oliwier Gardynik",
    position: DEFENDER
  },
  {
    number: 5,
    name: "Szymon Gościski",
    position: ATTACKER
  },
  {
    number: 6,
    name: "Robert Janicki",
    position: ATTACKER
  },
  {
    number: 7,
    name: "Maksymilian Kłodarski",
    position: DEFENDER
  },
  {
    number: 8,
    name: "Anton Kowaluk",
    position: DEFENDER
  },
  {
    number: 9,
    name: "Oliwier Łaskarzewski",
    position: MIDFIELDER
  },
  {
    number: 10,
    name: "Jordan Maciejewski",
    position: GOALKEEPER
  },
  {
    number: 11,
    name: "Jakub Malik",
    position: MIDFIELDER
  },
  {
    number: 12,
    name: "Kajetan Michałowski",
    position: DEFENDER
  },
  {
    number: 13,
    name: "Aleksander Olejnik",
    position: MIDFIELDER
  },
  {
    number: 14,
    name: "Jakub Pishchanskyy",
    position: DEFENDER
  },
  {
    number: 15,
    name: "Daniel Rutkowski",
    position: MIDFIELDER
  },
  {
    number: 17,
    name: "Adam Szwajkowski",
    position: ATTACKER
  },
  {
    number: 18,
    name: "Filip Szymański",
    position: ATTACKER
  },
  {
    number: 19,
    name: "Tomasz Tudies",
    position: ATTACKER
  },
  {
    number: 16,
    name: "Nikodem Mikuliszyn",
    position: MIDFIELDER
  }
];

class App extends Component {
  playersOfType(type) {
    return players.filter(p => p.position === type);
  }

  render() {
    return (
      <div>
        <PlayerList players={this.playersOfType(GOALKEEPER)} />
        <PlayerList players={this.playersOfType(DEFENDER)} />
        <PlayerList players={this.playersOfType(MIDFIELDER)} />
        <PlayerList players={this.playersOfType(ATTACKER)} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
