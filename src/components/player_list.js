import React, { Component } from 'react';
import Player from './Player';
import { GOALKEEPER, DEFENDER, MIDFIELDER, ATTACKER } from '../position';

class PlayerList extends Component {
  renderPlayers(players) {
    return players.map((p) => {
      return (
        <Player player={p} />
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderPlayers(this.props.players)}
      </div>
    );
  };
};

export default PlayerList
