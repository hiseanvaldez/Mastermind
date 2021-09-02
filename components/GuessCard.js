import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default GuessCard = (props) => {
  return (
    <View style={styles.cartContainer}>
      <Text>This is a card</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",

    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
