import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";
import Checker from "./Checker";

export default GuessCard = (props) => {
  const { guesses } = props;

  return (
    <View style={styles.card}>
      <View style={styles.pegContainer}>
        <Peg color={guesses && guesses[0] ? guesses[0] : "#FFF"} />
        <Peg color={guesses && guesses[1] ? guesses[1] : "#FFF"} />
        <Peg color={guesses && guesses[2] ? guesses[2] : "#FFF"} />
        <Peg color={guesses && guesses[3] ? guesses[3] : "#FFF"} />
      </View>
      <View style={styles.separator} />
      <View style={styles.check}>
        <View style={styles.checkRow}>
          <Checker color={"salmon"} />
          <Checker color={"salmon"} />
        </View>
        <View style={styles.checkRow}>
          <Checker color={"salmon"} />
          <Checker color={"salmon"} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  pegContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  leftContainer: {
    flexDirection: "row",
    padding: 5,
  },
  separator: {
    width: 2,
    height: "90%",
    marginHorizontal: 20,

    borderRadius: 1,
    backgroundColor: Colors.gray,
  },
  check: {
    height: 50,
    width: 50,
    justifyContent: "space-between",
  },
  checkRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
