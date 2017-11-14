import React from "react";
import { connect } from "react-redux";
import GameBoardButton from "./GameBoardButton";
import { updateGame } from "../actions";

import "../../css/GameBoard.css";

const GameBoard = ({ board, lastPlay, hasWinner, handleBoardButtonClicked }) => {
  let key = 0;
  let buttons = board.map((row, rowIndex) =>
    row.map((item, itemIndex) => (
      <GameBoardButton
        key={key++}
        xPos={itemIndex}
        yPos={rowIndex}
        label={item}
        type={item ? "default" : "primary"}
        hasWinner={hasWinner}
        handleButtonClicked={() => handleBoardButtonClicked(itemIndex, rowIndex)}
      />
    ))
  );
  return <div className="game-board">{buttons}</div>;
};

const mapStateToProps = ({ board, lastPlay, hasWinner }) => ({
  board,
  lastPlay,
  hasWinner
});

const mapDistachToProps = dispatch => ({
  handleBoardButtonClicked: (xPos, yPos) => {
    dispatch(updateGame({xPos, yPos}));
  }
});

export default connect(mapStateToProps, mapDistachToProps)(GameBoard);
