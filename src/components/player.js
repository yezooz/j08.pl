import React from "react";

const Player = ({player}) => {
    return (
        <li className="list-group-item">
            {player.full_name} [{player.number}]
        </li>
    );
};

export default Player;
