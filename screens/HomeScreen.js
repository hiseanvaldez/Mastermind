import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default HomeScreen = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MASTERMIND</Text>
      <Button
        style={styles.button}
        title="New Game"
        onPress={() => {
          navigation.navigate("Game");
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
