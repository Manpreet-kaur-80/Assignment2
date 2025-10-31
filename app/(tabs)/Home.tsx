import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";

export default function Home() {
  return (
    <View style={styles.screen}>
      <Header />

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={styles.rowTop}>
          <Text style={styles.bigLogo}>facebook</Text>
          <View style={styles.actionsRow}>
            <Text style={styles.action}>＋</Text>
            <Text style={styles.action}>🔎</Text>
            <Text style={styles.action}>💬</Text>
          </View>
        </View>

        <View style={styles.whatsBox}>
          <View style={styles.avatar} />
          <Text style={styles.whatsText}>What's on your mind?</Text>
          <Text style={styles.photoBtn}>🖼️</Text>
        </View>

        {/* Stories strip */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 12 }}
          style={{ marginTop: 8 }}
        >
          {["Create story", "Kulveer", "Karmjeet", "Jaidev", "Rana"].map(
            (n, i) => (
              <View key={i} style={styles.storyCard}>
                <View style={styles.storyPic} />
                <Text style={styles.storyName} numberOfLines={1}>
                  {n}
                </Text>
              </View>
            )
          )}
        </ScrollView>

        {/*  */}
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.postThumb} />
            <View>
              <Text style={styles.postTitle}>
                Calgary Buy, Sell & Trade Health & Beauty
              </Text>
              <Text style={styles.postMeta}>Zoey Mcgillis · 19h · 🌐</Text>
            </View>
          </View>
          <Text style={styles.postBody}>
            Still in great condition , no cracks , just don’t have the room —
            pick up only
          </Text>
          <Image
            style={styles.postImage}
            source={{
              uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
            }}
          />
          <Text style={styles.priceLine}>CA$10 · CALGARY, AB</Text>
          <Text style={styles.boldLine}>Plastic white organiser drawer</Text>
          <View style={styles.postActions}>
            <Text>👍 Like</Text>
            <Text>💬 Comment</Text>
            <Text>↗️ Share</Text>
          </View>
        </View>
      </ScrollView>

      <BottomBar />
    </View>
  );
}

const CARD_BG = "#fff";
const LIGHT = "#f3f5f7";

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#fff" },
  rowTop: {
    paddingHorizontal: 16,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bigLogo: { fontSize: 24, color: "#1877F2", fontWeight: "bold" },
  actionsRow: { flexDirection: "row", gap: 14 },
  action: { fontSize: 20 },
  whatsBox: {
    marginTop: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatar: { width: 38, height: 38, borderRadius: 19, backgroundColor: LIGHT },
  whatsText: { flex: 1, color: "#777" },
  photoBtn: { fontSize: 18 },
  storyCard: {
    width: 90,
    marginRight: 10,
    alignItems: "center",
  },
  storyPic: {
    width: 90,
    height: 150,
    borderRadius: 12,
    backgroundColor: LIGHT,
  },
  storyName: { marginTop: 6, fontSize: 12 },
  post: { backgroundColor: CARD_BG, marginTop: 14, paddingBottom: 10 },
  postHeader: { flexDirection: "row", gap: 10, padding: 12, alignItems: "center" },
  postThumb: { width: 40, height: 40, borderRadius: 20, backgroundColor: LIGHT },
  postTitle: { fontWeight: "600", maxWidth: 260 },
  postMeta: { color: "#777", fontSize: 12 },
  postBody: { paddingHorizontal: 12, paddingBottom: 8 },
  postImage: { width: "100%", height: 260 },
  priceLine: { paddingHorizontal: 12, color: "#777", marginTop: 8 },
  boldLine: { paddingHorizontal: 12, fontWeight: "600", marginBottom: 6 },
  postActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderColor: "#e3e3e3",
  },
})



