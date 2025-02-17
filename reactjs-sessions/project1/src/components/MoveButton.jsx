import React from 'react';
import './MoveButton.css'

const MoveButton = ({ moveType, imageSrc, onClick }) => {
  return (
    <button
      onClick={() => onClick(moveType)}
      className="move-button"
    >
      <img src={imageSrc} className="move-icon" alt={`${moveType}-emoji`} />
    </button>
  );
};

export default MoveButton;
