import "antd/dist/antd.css";

import React from "react";
import { connect } from "react-redux";
import Button from "antd/lib/button";
import GameBoard from "./GameBoard";
import { resetGame } from "../actions";

import "../../css/App.css";

const app = ({ lastPlay, isWinner, resetGame }) => {
  const resetButtonLabel = isWinner ? `${lastPlay} WINS!` : "reset...";
  return (
    <div className="app">
      <Button type="primary" onClick={resetGame}>
        {resetButtonLabel}
      </Button>
      <GameBoard />
    </div>
  );
};

const mapStateToProps = ({ lastPlay, isWinner }) => ({
  lastPlay,
  isWinner
});

const mapDispatchToProps = { resetGame };

export default connect(mapStateToProps, mapDispatchToProps)(app);
