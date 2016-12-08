import React, { Component } from 'react';
import Player from './Player';
import { GOALKEEPER, DEFENDER, MIDFIELDER, ATTACKER } from '../position';

class PlayerList extends Component {
  renderPlayers(players) {
    return players.map((p) => {
      return (
        <Player key={p.number} player={p} />
      );
    });
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderPlayers(this.props.players)}
      </ul>
    );
  };
};

export default PlayerList
