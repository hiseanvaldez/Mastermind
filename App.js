import React, { useState } from "react";
import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";

import Navigator from "./navigation/Navigator";
import { combineReducers, createStore } from "redux";
import gameReducer from "./redux/gameReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  game: gameReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

const fetchFonts = () => {
  return Fonts.loadAsync({
    monoton: require("./assets/fonts/Monoton-Regular.ttf"),
  });
};

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
