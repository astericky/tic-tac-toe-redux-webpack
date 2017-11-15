import "antd/dist/antd.css";

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "antd/lib/button";
import GameBoard from "./GameBoard";
import { resetGame } from "../actions";

import "../../css/App.css";

const App = ({ lastPlay, isWinner }) => {
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

App.propTypes = {
  lastPlay: PropTypes.string.isRequired,
  isWinner: PropTypes.bool.isRequired
};

const mapStateToProps = ({ lastPlay, isWinner }) => ({
  lastPlay,
  isWinner
});

const mapDispatchToProps = { resetGame };

export default connect(mapStateToProps, mapDispatchToProps)(App);
