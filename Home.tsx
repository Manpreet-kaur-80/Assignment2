import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function FacebookHome() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>facebook</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="add-circle-outline" size={24} color="black" style={styles.icon} />
          <Ionicons name="search-outline" size={24} color="black" style={styles.icon} />
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
        </View>
      </View>

      {/* What's on your mind */}
      <View style={styles.statusInput}>
        <Image
          source={{ uri: "https://www.w3schools.com/howto/img_avatar.png" }}
          style={styles.avatar}
        />
        <TextInput
          placeholder="What's on your mind?"
          placeholderTextColor="#777"
          style={styles.input}
        />
        <Ionicons name="images-outline" size={22} color="#1877f2" />
      </View>

      {/* Stories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.stories}
      >
        <View style={styles.storyCard}>
          <View style={styles.storyPlaceholder}>
            <Ionicons name="add" size={28} color="#1877f2" />
          </View>
          <Text style={styles.storyText}>Create story</Text>
        </View>

        {["Kulveer Dhillon", "Karmjeet Dhillon", "Jaideep Singh"].map(
          (name, i) => (
            <View key={i} style={styles.storyCard}>
              <Image
                source={{ uri: https://picsum.photos/200/300?random=${i} }}
                style={styles.storyImage}
              />
              <Text style={styles.storyText}>{name}</Text>
            </View>
          )
        )}
      </ScrollView>

      {/* Post */}
      <View style={styles.postCard}>
        <View style={styles.postHeader}>
          <Image
            source={{ uri: "https://www.w3schools.com/howto/img_avatar2.png" }}
            style={styles.avatarSmall}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.postGroup}>
              Calgary Buy, Sell & Trade Health & Beauty
            </Text>
            <Text style={styles.postAuthor}>Zoey Mcgillis · 19h</Text>
          </View>
          <Ionicons name="ellipsis-horizontal" size={20} color="#444" />
        </View>

        <Text style={styles.postText}>
          Still in great condition, no cracks, just don’t have the room. Pick up only.
        </Text>

        <Text style={styles.postPrice}>CA$10 · CALGARY, AB</Text>
        <Text style={styles.postTitle}>Plastic white organiser drawer</Text>

        <View style={styles.postActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="thumbs-up-outline" size={20} color="#444" />
            <Text style={styles.actionText}> Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="chatbubble-outline" size={20} color="#444" />
            <Text style={styles.actionText}> Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="share-outline" size={20} color="#444" />
            <Text style={styles.actionText}> Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 40 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  logo: { fontSize: 28, color: "#1877f2", fontWeight: "700" },
  headerIcons: { flexDirection: "row" },
  icon: { marginHorizontal: 8 },

  statusInput: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  input: {
    marginLeft: 10,
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },

  stories: { paddingVertical: 10, paddingLeft: 10, backgroundColor: "#fff" },
  storyCard: { alignItems: "center", marginRight: 12 },
  storyPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  storyImage: { width: 60, height: 60, borderRadius: 10 },
  storyText: { fontSize: 12, marginTop: 5 },

  postCard: {
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatarSmall: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  postGroup: { fontWeight: "bold", fontSize: 14 },
  postAuthor: { color: "#777", fontSize: 12 },
  postText: { marginVertical: 8, fontSize: 14 },
  postPrice: { color: "#555", fontWeight: "bold", marginBottom: 3 },
  postTitle: { fontSize: 15, marginBottom: 5 },

  postActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    marginTop: 10,
    paddingTop: 5,
  },
  actionButton: { flexDirection: "row", alignItems: "center" },
  actionText: { color: "#444", fontSize: 13 },
});