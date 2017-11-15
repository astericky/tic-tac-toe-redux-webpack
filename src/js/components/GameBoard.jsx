import React from "react";
import { connect } from "react-redux";
import Button from "antd/lib/button";
import { updateGame } from "../actions";

import "../../css/GameBoard.css";

const GameBoard = ({ board, isWinner, updateGame }) => {
  let key = 0;
  const buttons = board.map((row, rowIndex) =>
    row.map((item, itemIndex) => (
      <Button
        className="game-board-button"
        key={key++}
        type={item ? "default" : "primary"}
        disabled={item || isWinner}
        onClick={() => updateGame(itemIndex, rowIndex)}
      >
        {item || "\0"}
      </Button>
    ))
  );
  return <div className="game-board">{buttons}</div>;
};

const mapStateToProps = ({ board, isWinner }) => ({
  board,
  isWinner
});

const mapDistachToProps = { updateGame };

export default connect(mapStateToProps, mapDistachToProps)(GameBoard);
