import { RESET_GAME, GAME_BOARD_BUTTON_CLICKED } from '../constants/actionTypes'
import checkTicTacToe from '../utils/checkTicTacToe'

const initialState = () => ({
  board: [['', '', ''], ['', '', ''], ['', '', '']],
  lastPlay: 'O',
  isWinner: false,
})

function updateBoard(state, position) {
  const { lastPlay } = state
  const { xPos, yPos } = position
  const currentPlay = lastPlay === 'O' ? 'X' : 'O'
  const newBoard = state.board.map(row => row.map(column => column))
  newBoard[yPos][xPos] = currentPlay
  return {
    board: newBoard,
    lastPlay: currentPlay,
    isWinner: checkTicTacToe(newBoard),
  }
}

function board(state = initialState(), action) {
  console.log('board :: ', action)
  switch (action.type) {
    case GAME_BOARD_BUTTON_CLICKED:
      return updateBoard(state, action.position)
    case RESET_GAME:
      return initialState()
    default:
      return state
  }
}

export default board
