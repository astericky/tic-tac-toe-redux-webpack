import { combineReducers } from 'redux'
import { GAME_BOARD_BUTTON_CLICKED } from '../constants/actionTypes'
import checkTicTacToe from '../utils/checkTicTacToe';

const defaultState = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

function board(state = defaultState, action) {
    let newState;
    switch (action.type) {
        case GAME_BOARD_BUTTON_CLICKED:
            newState = [ ...state ];
            // newState[yPos][xPos] = lastPlay;
            return newState;
        default: 
            return state;
    }
}

function lastPlay(state = '', action) {
    const { type, lastPlay } = action;
    switch (type) {
      case GAME_BOARD_BUTTON_CLICKED:
        return lastPlay;
      default:
        return state;
    } 
}

function isWinner(state = false, action) {
    switch (action.type) {
        case GAME_BOARD_BUTTON_CLICKED:
            return state;
        default:
            return state;
    } 
}

export default combineReducers({
    board,
    lastPlay,
    isWinner
})