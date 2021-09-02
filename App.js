import React, { useState } from "react";
import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";

import Navigator from "./navigation/Navigator";

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

  return <Navigator />;
}
