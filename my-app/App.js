// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    // view is equivalent to HTML div - View holds components but is not able to render text
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Course Goal" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List Of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    margin: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    padding: "1%",
    width: "75%",
    borderWidth: 1,
    borderRadius: 5,
    marginRight: "10%",
  },
});
