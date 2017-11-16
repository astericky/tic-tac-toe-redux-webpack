import 'antd/dist/antd.css'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from 'antd/lib/button'
import GameBoard from './GameBoard'
import { resetGame } from '../actions'

import '../../css/App.css'

const App = ({ lastPlay, isWinner, handleResetButtonClicked }) => {
  const resetButtonLabel = isWinner ? `${lastPlay} WINS!` : 'reset...'
  return (
    <div className="app">
      <Button type="primary" onClick={handleResetButtonClicked}>
        {resetButtonLabel}
      </Button>
      <GameBoard />
    </div>
  )
}

App.propTypes = {
  lastPlay: PropTypes.string.isRequired,
  isWinner: PropTypes.bool.isRequired,
  handleResetButtonClicked: PropTypes.func.isRequired,
}

const mapStateToProps = ({ lastPlay, isWinner }) => ({
  lastPlay,
  isWinner,
})

const mapDispatchToProps = dispatch => ({
  handleResetButtonClicked: () => dispatch(resetGame()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
