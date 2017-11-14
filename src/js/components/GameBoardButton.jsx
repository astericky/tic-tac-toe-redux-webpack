import React from 'react';
import Button from 'antd/lib/button';

const GameBoardButton = ({
  type,
  label,
  xPos,
  yPos,
  hasWinner,
  handleButtonClicked
}) => {
  const handleClick = () => handleButtonClicked(xPos, yPos);
  return (
    <Button
      type={type || "primary"}
      className="game-board-button"
      onClick={handleClick}
    >
      {label || "\0"}
    </Button>
  );
};

export default GameBoardButton;
