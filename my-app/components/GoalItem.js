import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ text, onDeleteItem, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteItem.bind(this, id)}
        // android only
        android_ripple={{ color: "#3f37c9" }}
        // iphone - if pressed then apply styling
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#4361ee",
  },
  goalText: {
    padding: 12,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  pressedItem: {
    borderRadius: 8,
    backgroundColor: "#3f37c9",
  },
});
