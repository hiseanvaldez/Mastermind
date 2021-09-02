import Colors from "../constants/Colors";
import { START_GAME, RESET_GAME, SELECT_COLOR } from "./gameAction";

const initialState = {
  code: [],
  guesses: {},
  guessCount: 0,
  didWin: false,
};

const evaluateRound = (roundGuesses, count, code) => {
  let result = [];
  roundGuesses.forEach((color, index) => {
    if (code.includes(color)) {
      if (code.indexOf(color) === index) {
        result.push(1);
      } else {
        result.push(0);
      }
    }
  });

  return result;
};

export default gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME: {
      const keys = Object.keys(Colors);
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
      const updatedGuessCount = state.guessCount + 1;
      let roundGuesses = [];
      let roundResult = [];

      if (action.payload.round in state.guesses) {
        roundGuesses = state.guesses[action.payload.round].guesses;
      }

      roundGuesses.push(action.payload.color);

      if (updatedGuessCount % 4 === 0) {
        roundResult = evaluateRound(
          roundGuesses,
          updatedGuessCount,
          state.code
        );
      }

      return {
        ...state,
        guessCount: updatedGuessCount,
        guesses: {
          ...state.guesses,
          [action.payload.round]: {
            result: roundResult,
            guesses: roundGuesses,
          },
        },
      };
    }
    case RESET_GAME: {
      return init;
    }
    default:
      return state;
  }
};
