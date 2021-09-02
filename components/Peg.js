import React from "react";
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";

export default Peg = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.parent}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onSelect}>
          <View
            style={{ ...styles.peg, ...{ backgroundColor: props.color } }}
          />
        </TouchableCmp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    height: 50,
    width: 50,
    borderRadius: 25,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  touchable: {
    borderRadius: 25,
    overflow: "hidden",
  },
  peg: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
