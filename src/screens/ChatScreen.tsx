import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  Feather,
  AntDesign,
} from "@expo/vector-icons"; // For icons (can also use react-native-vector-icons)
import ItemComponent from "../components/ItemComponent";

const ChatScreen = () => {
  const [chatItems, setChatItems] = useState([]);
  var myHeaders = new Headers();
  myHeaders.append("X-API-KEY", "ecae079c53528a61815a6bf788f8c023107c8468");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    q: "apple inc",
    page: 2,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow" as RequestRedirect,
  };

  const fetchAPI = async () => {
    try {
      const response = await fetch(
        "https://google.serper.dev/search",
        requestOptions
      );
      const result = await response.json();
      setChatItems(result.organic);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  interface ChatItem {
    id: string;
    title: string;
    link: string;
    snippet: string;
    position: string;
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

      {/* Chat title */}
      <View style={styles.chatTitle}>
        <Text style={styles.chatTitleText}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
      </View>

      {/* Chat List */}
      <FlatList
        data={chatItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.position}
        contentContainerStyle={styles.chatList}
      />

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navButton}>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="home-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <AntDesign name="back" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
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
  chatTitle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  chatTitleText: {
    fontSize: 16,
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
