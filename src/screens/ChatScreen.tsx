import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"; // For icons (can also use react-native-vector-icons)
import ItemComponent from "../components/ItemComponent";

const ChatScreen = () => {
  const chatItems = [
    {
      id: "1",
      title: "Ca nấu lẩu, nấu mì mini...",
      shop: "Shop Devang",
      image: "https://picsum.photos/200/300",
    },
    {
      id: "2",
      title: "Sản phẩm ăn vặt LTD Food",
      shop: "LTD Food",
      image: "https://picsum.photos/200/300",
    },
    {
      id: "3",
      title: "Đồ chơi xe tải",
      shop: "Shop",
      image: "https://picsum.photos/200/300",
    },
  ];

  interface ChatItem {
    id: string;
    title: string;
    shop: string;
    image: string;
  }

  const renderItem = ({ item }: { item: ChatItem }) => (
    <ItemComponent item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Navigation Bar */}
      <View style={styles.navBar}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.navTitle}>Chat</Text>
        <MaterialIcons name="shopping-cart" size={24} color="white" />
      </View>

      {/* Chat List */}
      <FlatList
        data={chatItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatList}
      />

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="home-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="chatbubble-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="person-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#03A9F4",
    padding: 16,
  },
  navTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  chatList: {
    paddingHorizontal: 10,
  },

  bottomNavBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#03A9F4",
    paddingVertical: 10,
  },
  navButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatScreen;
