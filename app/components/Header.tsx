import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>facebook</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderColor: "#e3e3e3",
  },
  text: { fontSize: 28, fontWeight: "bold", color: "#1877F2" },
});
