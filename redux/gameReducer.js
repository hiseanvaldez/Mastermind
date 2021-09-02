import { START_GAME, RESET_GAME, SELECT_COLOR } from "./gameAction";

const initialState = {
  numberOfPegs: 4,
  code: [],
  guesses: [],
};

export default gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME: {
      return state;
    }
    case SELECT_COLOR: {
      console.log(action.color);
      return state;
    }
    case RESET_GAME: {
      return init;
    }
    default:
      return state;
  }
};
