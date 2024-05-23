import { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

export default function GoalInput({ onAddGoal }) {
  // useState to save input
  const [enteredGoalText, setEnteredGoalText] = useState("");

  // set entered text
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  //   function addGoalHandler() {
  //     onAddGoal(enteredGoalText);
  //     setEnteredGoalText(""); // reset text after added
  //   }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Course Goal"
        onChangeText={goalInputHandler}
        // two way binding: when text is reset in goalInputHandler
        // make sure it's also reset in the TextInput
        value={enteredGoalText}
      />
      <Button
        title="Add Goal"
        onPress={() => {
          onAddGoal(enteredGoalText);
          setEnteredGoalText("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    // main axis
    justifyContent: "space-between",
    // cross axis
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  textInput: {
    width: "75%",
    borderWidth: 1,
    borderRadius: 10,
    marginRight: "2%",
    padding: "3%",
  },
});
