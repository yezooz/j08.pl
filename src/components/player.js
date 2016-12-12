import React from "react";

const Player = ({player}) => {
  return (
    <li className="list-group-item">
      {player.full_name} [{player.number}]<br />
    </li>
  );
};

export default Player;
