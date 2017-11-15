import {
  RESET_GAME,
  GAME_BOARD_BUTTON_CLICKED
} from "../constants/actionTypes";
import checkTicTacToe from "../utils/checkTicTacToe";

const initialState = () => ({
  board: [["", "", ""], ["", "", ""], ["", "", ""]],
  lastPlay: "O",
  isWinner: false
});

function updateBoard(state, position) {
  const { lastPlay } = state;
  const { xPos, yPos } = position;
  const currentPlay = lastPlay === "O" ? "X" : "O";
  const newBoard = state.board.map(row => row.map(column => column));
  newBoard[yPos][xPos] = currentPlay;
  return newBoard;
}

function board(state = initialState(), action) {
  switch (action.type) {
    case GAME_BOARD_BUTTON_CLICKED:
      let { lastPlay } = state;
      let newBoard = updateBoard(state, action.position);
      return {
        board: newBoard,
        lastPlay: lastPlay === "O" ? "X" : "O",
        isWinner: checkTicTacToe(newBoard)
      };
    case RESET_GAME:
      return initialState();
    default:
      return state;
  }
}

export default board;
