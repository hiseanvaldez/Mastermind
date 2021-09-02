import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { startGame } from "../redux/gameAction";

export default HomeScreen = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const newGameHandler = () => {
    dispatch(startGame());
    navigation.navigate("Game");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MASTERMIND</Text>
      <Button
        style={styles.button}
        title="New Game"
        onPress={() => {
          newGameHandler();
        }}
      />
    </View>
  );
};

HomeScreen.navigationOptions = (navData) => {
  return {
    headerVisible: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "monoton",
    fontSize: 60,
  },
  button: {
    backgroundColor: "salmon",
  },
});
