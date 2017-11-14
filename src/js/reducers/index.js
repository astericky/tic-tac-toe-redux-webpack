import { combineReducers } from 'redux'
import { RESET_GAME, GAME_BOARD_BUTTON_CLICKED } from '../constants/actionTypes'
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
        case RESET_GAME:
            newState = [ ...defaultState ];
            return newState;
        default: 
            return state;
    }
}

function lastPlay(state = 'O', action) {
    const { type, lastPlay } = action;
    switch (type) {
        case GAME_BOARD_BUTTON_CLICKED:
            return lastPlay === 'O' ? 'X' : 'O';
        case RESET_GAME:
            return 'O'
        default:
            return state;
    } 
}

function isWinner(state = false, action) {
    switch (action.type) {
        case GAME_BOARD_BUTTON_CLICKED:
            return state;
        case RESET_GAME:
            return false;
        default:
            return state;
    } 
}


export default combineReducers({
    board,
    lastPlay,
    isWinner
})