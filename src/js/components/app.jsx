import "antd/dist/antd.css";

import React from 'react';
import { connect } from 'react-redux';
import Button from 'antd/lib/button';
import GameBoard from './GameBoard';
import { resetGame } from '../actions';

import '../../css/App.css';

const app = ({
  lastPlay,
  isWinner,
  handleResetButtonClicked
}) => {
  const resetButtonLabel = isWinner ? `${lastPlay} WINS!` : 'reset...';
  return (
    <div className="app">
      <Button type="primary" onClick={ handleResetButtonClicked }>
        { resetButtonLabel }
      </Button>
      <GameBoard />
    </div>
  );
};

const mapStateToProps = ({ lastPlay, isWinner }) => ({
  lastPlay,
  isWinner
});

const mapDispatchToProps = disptach => ({
  handleResetButtonClicked: () => {
    disptach(resetGame());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(app);