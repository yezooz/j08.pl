import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GOALKEEPER, DEFENDER, MIDFIELDER, ATTACKER } from './position';
import { PLAYERS } from './players';
import PlayerList from './components/player_list';

class App extends Component {
  playersOfType(type) {
    return PLAYERS.filter(p => p.position === type);
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
