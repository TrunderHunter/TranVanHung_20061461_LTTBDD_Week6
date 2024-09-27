import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

interface ChatItem {
  id: string;
  title: string;
  shop: string;
  image: string;
}

const ItemComponent = ({ item }: { item: ChatItem }) => {
  return (
    <View style={styles.chatItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text numberOfLines={1} style={styles.productTitle}>
          {item.title}
        </Text>
        <Text style={styles.shopName}>
          Shop <Text style={styles.shopHighlight}>{item.shop}</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemComponent;

const styles = StyleSheet.create({
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginVertical: 8,
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
    justifyContent: "center",
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  shopName: {
    color: "#757575",
    marginTop: 4,
  },
  shopHighlight: {
    color: "#FF0000",
    fontWeight: "bold",
  },
  chatButton: {
    backgroundColor: "#F44336",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  chatButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});
