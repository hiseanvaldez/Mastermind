import Colors from "../constants/Colors";
import { START_GAME, RESET_GAME, SELECT_COLOR } from "./gameAction";

const initialState = {
  code: [],
  guesses: [],
  guessCount: 0,
};

export default gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME: {
      console.log("game started");
      var keys = Object.keys(Colors);

      const newCode = [];

      for (; newCode.length < 4; ) {
        const c = Colors[keys[(keys.length * Math.random()) << 0]];
        if (!newCode.includes(c)) {
          newCode.push(c);
        }
      }

      return {
        ...state,
        code: newCode,
      };
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
