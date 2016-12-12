import React, {Component} from "react";
import ReactDOM from "react-dom";
import {PLAYERS} from "./players";
import PlayerList from "./components/player_list";
import Pitch from "./components/pitch";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: PLAYERS
    };
  }

  render() {
    const playerOfType = (position) => this.setState({players: PLAYERS.filter(p => p.position === position)});
    const allPlayers = () => this.setState({players: PLAYERS});

    return (
      <span>
        <div className="col-md-12">
          <h1>Jaguar Gdańsk <small>2008 Północ</small></h1>
        </div>
        <div className="col-md-8">
          <Pitch playersOfType={playerOfType}
                 allPlayers={allPlayers}/>
        </div>
        <div className="col-md-4">
          <PlayerList players={this.state.players}/>
        </div>
      </span>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
