import { RESET_GAME, GAME_BOARD_BUTTON_CLICKED } from '../constants/actionTypes';

export const resetGame = () => ({ type: RESET_GAME });

export const updateGame = (xPos, yPos) => ({ 
    type: GAME_BOARD_BUTTON_CLICKED,
    position: { xPos, yPos }
});