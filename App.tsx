import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ItemComponent from "./src/components/ItemComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <ItemComponent />
      <ItemComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
