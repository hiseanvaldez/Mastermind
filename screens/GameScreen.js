import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import GuessCard from "../components/GuessCard";
import Peg from "../components/Peg";
import Pegs from "../constants/Pegs";
import { selectColor } from "../redux/gameAction";

export default GameScreen = () => {
  const dispatch = useDispatch();
  const guesses = useSelector((state) => state.game.guesses);
  const guessCount = useSelector((state) => state.game.guessCount);

  const pegs = Pegs.map((peg) => (
    <Peg
      key={peg.id}
      color={peg.color}
      onSelect={() => {
        selectPegHandler(peg.color);
      }}
    />
  ));

  const selectPegHandler = (color) => {
    const round = Math.floor(guessCount / 4) + 1;
    dispatch(selectColor(round, color));
  };

  const renderCards = () => {
    var cards = [];

    for (let [key, value] of Object.entries(guesses)) {
      cards.push(
        <GuessCard key={key} guesses={value.guesses} result={value.result} />
      );
    }

    return <View style={styles.boardContainer}>{cards}</View>;
  };

  return (
    <View style={styles.container}>
      {renderCards()}
      <View style={styles.buttonContainer}>{pegs}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  boardContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    padding: 20,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: 20,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
});
