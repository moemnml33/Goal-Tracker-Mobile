import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ text, onDeleteItem, id }) {
  return (
    <Pressable onPress={onDeleteItem.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#000fff",
  },
  goalText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
