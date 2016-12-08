import React from 'react';

const Pitch = (props) => {
  return (
    <div class="pitch">
      <div class="pitch-attack">
        <div class="pitch-player">
          9
        </div>
        <div class="pitch-player">
          10
        </div>
      </div>
      <div class="pitch-midfield">
        <div class="pitch-player">
          4
        </div>
      </div>
      <div class="pitch-defense">
        <div class="pitch-player">
          2
        </div>
        <div class="pitch-player">
          3
        </div>
      </div>
      <div class="pitch-goalkeeper">
        <div class="pitch-player">
          1
        </div>
      </div>
    </div>
  );
};

export default Pitch;
