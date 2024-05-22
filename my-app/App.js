// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  // useState to save input
  const [enteredGoalText, setEnteredGoalText] = useState("");
  // useState to save the list of added goals
  const [courseGoals, setCourseGoals] = useState([]);
  // set entered text
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  // add goal button functionality
  function addGoalHandler() {
    // arrow function that creates a new list made of the old list destructured and a new element appended at tail
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }
  return (
    // view is equivalent to HTML div - View holds components but is not able to render text
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal, key) => (
          <View key={key} style={styles.goalItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
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
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#000fff",
    color: "white",
  },
});
