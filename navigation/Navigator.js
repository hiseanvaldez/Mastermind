import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import GameScreen from "../screens/GameScreen";
import HomeScreen from "../screens/HomeScreen";

const MainNavigator = createStackNavigator({
  Home: HomeScreen,
  Game: GameScreen,
});

export default createAppContainer(MainNavigator);
