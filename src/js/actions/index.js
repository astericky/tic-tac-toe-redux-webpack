import { RESET_GAME, GAME_BOARD_BUTTON_CLICKED } from '../constants/actionTypes';

export const resetGame = () => ({ type: RESET_GAME });

export const updateGame = () => ({ type: GAME_BOARD_BUTTON_CLICKED });