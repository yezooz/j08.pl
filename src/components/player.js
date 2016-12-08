import React from 'react';

const Player = ({ player }) => {
  return (
    <p>{player.name} [{player.number}] {player.position}</p>
  );
};

export default Player;
