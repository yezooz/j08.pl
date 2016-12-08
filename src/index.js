import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GOALKEEPER, DEFENDER, MIDFIELDER, ATTACKER } from './position';
import { PLAYERS } from './players';
import PlayerList from './components/player_list';
import Pitch from './components/pitch';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: PLAYERS
    };
  }

  render() {
    return (
      <span>
        <div className="col-md-8">
          <Pitch playersOfType={position => this.setState({ players: PLAYERS.filter(p => p.position === position)})} allPlayers={() => this.setState({ players: PLAYERS })} />
        </div>
        <div className="col-md-4">
          <PlayerList players={this.state.players} />
        </div>
      </span>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
