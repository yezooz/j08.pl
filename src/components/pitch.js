import React from 'react';
import { GOALKEEPER, DEFENDER, MIDFIELDER, ATTACKER } from '../position';

const Pitch = (props) => {
  const { allPlayers, playersOfType } = props;

  return (
    <div className="pitch">
      <div className="pitch-line goal-line">
        <div className="player-middle">
          <span className="btn" onClick={() => playersOfType(GOALKEEPER)}>
            G
          </span>
        </div>
      </div>
      <div className="pitch-line defense-line">
        <div className="player-left">
          <span className="btn" onClick={() => playersOfType(DEFENDER)}>
            DL
          </span>
        </div>
        <div className="player-right" onClick={() => playersOfType(DEFENDER)}>
          <span className="btn">
            DR
          </span>
        </div>
      </div>
      <div className="pitch-line midfield-line">
        <div className="player-middle" onClick={() => playersOfType(MIDFIELDER)}>
          <span className="btn">
            M
          </span>
        </div>
      </div>
      <div className="pitch-line attack-line">
        <div className="player-left" onClick={() => playersOfType(ATTACKER)}>
          <span className="btn">
            AL
          </span>
        </div>
        <div className="player-right">
          <span className="btn" onClick={() => playersOfType(ATTACKER)}>
            AR
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
