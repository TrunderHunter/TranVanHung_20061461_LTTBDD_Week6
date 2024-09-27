import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ItemComponent = () => {
  return (
    <View>
      <Image
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
        style={{ width: 160, height: 160 }}
      />
      <View
        style={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text>ItemComponent</Text>
      </View>
    </View>
  );
};

export default ItemComponent;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,

    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
