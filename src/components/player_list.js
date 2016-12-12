import React, {Component} from "react";
import Player from "./Player";

class PlayerList extends Component {
  renderPlayers(players) {
    return players.map((p) => {
      return (
        <Player key={p.number} player={p}/>
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
