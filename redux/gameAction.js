export const START_GAME = "START_GAME";
export const RESET_GAME = "RESET_GAME";
export const SELECT_COLOR = "SELCT_COLOR";

export const startGame = () => {
  return { type: START_GAME };
};

export const selectColor = (color) => {
  return { type: SELECT_COLOR, color: color };
};
