import React from "react";
import {GOALKEEPER, DEFENDER, MIDFIELDER, ATTACKER} from "../position";

const Pitch = (props) => {
  const {allPlayers, playersOfType} = props;

  return (
    <div className="pitch">
      <div className="pitch-line goal-line">
        <div className="player player-middle">
          <span className="btn"
                onClick={() => playersOfType(GOALKEEPER)}
                onMouseEnter={() => playersOfType(GOALKEEPER)}
                onMouseOut={() => allPlayers()}>

          </span>
        </div>
      </div>
      <div className="pitch-line defense-line">
        <div className="player player-left">
          <span className="btn"
                onClick={() => playersOfType(DEFENDER)}
                onMouseEnter={() => playersOfType(DEFENDER)}
                onMouseOut={() => allPlayers()}>

          </span>
        </div>
        <div className="player player-right">
          <span className="btn"
                onClick={() => playersOfType(DEFENDER)}
                onMouseEnter={() => playersOfType(DEFENDER)}
                onMouseOut={() => allPlayers()}>

          </span>
        </div>
      </div>
      <div className="pitch-line midfield-line">
        <div className="player player-middle">
          <span className="btn"
                onClick={() => playersOfType(MIDFIELDER)}
                onMouseEnter={() => playersOfType(MIDFIELDER)}
                onMouseOut={() => allPlayers()}>

          </span>
        </div>
      </div>
      <div className="pitch-line attack-line">
        <div className="player player-left"
             onClick={() => playersOfType(ATTACKER)}
             onMouseEnter={() => playersOfType(ATTACKER)}
             onMouseOut={() => allPlayers()}>
          <span className="btn">

          </span>
        </div>
        <div className="player player-right">
          <span className="btn"
                onClick={() => playersOfType(ATTACKER)}
                onMouseEnter={() => playersOfType(ATTACKER)}
                onMouseOut={() => allPlayers()}>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
