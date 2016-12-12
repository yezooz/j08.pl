import React from 'react';
import { GOALKEEPER, DEFENDER, MIDFIELDER, ATTACKER } from '../position';

const Pitch = (props) => {
  const { allPlayers, playersOfType } = props;

  return (
    <div className="pitch">
      <div className="pitch-line goal-line">
        <div className="player player-middle">
          <span className="btn" onClick={() => playersOfType(GOALKEEPER)}>

          </span>
        </div>
      </div>
      <div className="pitch-line defense-line">
        <div className="player player-left">
          <span className="btn" onClick={() => playersOfType(DEFENDER)}>

          </span>
        </div>
        <div className="player player-right" onClick={() => playersOfType(DEFENDER)}>
          <span className="btn">

          </span>
        </div>
      </div>
      <div className="pitch-line midfield-line">
        <div className="player player-middle" onClick={() => playersOfType(MIDFIELDER)}>
          <span className="btn">

          </span>
        </div>
      </div>
      <div className="pitch-line attack-line">
        <div className="player player-left" onClick={() => playersOfType(ATTACKER)}>
          <span className="btn">

          </span>
        </div>
        <div className="player player-right">
          <span className="btn" onClick={() => playersOfType(ATTACKER)}>

          </span>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
