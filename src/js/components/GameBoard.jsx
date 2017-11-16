import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from 'antd/lib/button'
import { updateGame } from '../actions'

import '../../css/GameBoard.css'

const GameBoard = ({ board, isWinner }) => {
  let key = 0
  const buttons = board.map((row, rowIndex) =>
    row.map((item, itemIndex) => (
      <Button
        className="game-board-button"
        key={key++}
        type={item ? 'default' : 'primary'}
        disabled={item || isWinner}
        onClick={() => {
          console.log('Button Clicked')
          updateGame(itemIndex, rowIndex)
          console.log('Game Updated')
        }}
      >
        {item || '\0'}
      </Button>
    )),
  )
  return <div className="game-board">{buttons}</div>
}

GameBoard.propTypes = {
  board: PropTypes.arrayOf(PropTypes.array).isRequired,
  isWinner: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ board, isWinner }) => ({
  board,
  isWinner,
})

const mapDistachToProps = { updateGame }

export default connect(mapStateToProps, mapDistachToProps)(GameBoard)
