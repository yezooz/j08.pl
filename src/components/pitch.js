import React from "react";
import {GOALKEEPER, DEFENDER, MIDFIELDER, ATTACKER} from "../position";
import {LEFT, RIGHT} from "../side";

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
                onClick={() => playersOfType(DEFENDER, LEFT)}
                onMouseEnter={() => playersOfType(DEFENDER, LEFT)}
                onMouseOut={() => allPlayers()}>

          </span>
        </div>
        <div className="player player-right">
          <span className="btn"
                onClick={() => playersOfType(DEFENDER, RIGHT)}
                onMouseEnter={() => playersOfType(DEFENDER, RIGHT)}
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
             onClick={() => playersOfType(ATTACKER, LEFT)}
             onMouseEnter={() => playersOfType(ATTACKER, LEFT)}
             onMouseOut={() => allPlayers()}>
          <span className="btn">

          </span>
        </div>
        <div className="player player-right">
          <span className="btn"
                onClick={() => playersOfType(ATTACKER, RIGHT)}
                onMouseEnter={() => playersOfType(ATTACKER, RIGHT)}
                onMouseOut={() => allPlayers()}>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
