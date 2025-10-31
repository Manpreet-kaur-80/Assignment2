mport { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";

export default function Home() {
  const stories = [
    {
      name: "Create story",
      img: "https://i.pinimg.com/originals/a0/60/be/a060be70906ff02fea00add1144e4ad7.jpg",
    },
    {
      name: "Kulveer",
      img: "https://meninspire.com/wp-content/uploads/2025/01/Receding-hairline-haircut3-962x1024.webp",
    },
    {
      name: "Karmjeet",
      img: "https://tse4.mm.bing.net/th/id/OIP.RQu91azrCn5WCE_Jpz_t3QHaLF?pid=ImgDet&w=185&h=277&c=7&dpr=1.3&o=7&rm=3",
    },
    {
      name: "Jaidev",
      img: "https://tse4.mm.bing.net/th/id/OIP.RQu91azrCn5WCE_Jpz_t3QHaLF?pid=ImgDet&w=185&h=277&c=7&dpr=1.3&o=7&rm=3",
    },
    {
      name: "Rana",
      img: "https://tse2.mm.bing.net/th/id/OIP.i-NK30bwnCkDaKAXRo2-sgHaHd?pid=ImgDet&w=185&h=186&c=7&dpr=1.3&o=7&rm=3",
    },
  ];

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
          <Text style={styles.photoBtn}>🖼</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 12 }}
          style={{ marginTop: 8 }}
        >
          {stories.map((s, i) => (
            <View key={i} style={styles.storyCard}>
              <Image source={{ uri: s.img }} style={styles.storyPic} />
              <Text style={styles.storyName} numberOfLines={1}>
                {s.name}
              </Text>
            </View>
          ))}
        </ScrollView>

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
            Still in great condition, no cracks, just don’t have the room — pick
            up only
          </Text>
          <Image
            style={styles.postImage}
            source={{
              uri: "https://cdn.pixabay.com/photo/2023/09/19/09/09/sofa-8262137_640.jpg",
            }}
          />
          <Text style={styles.priceLine}>CA$10 · CALGARY, AB</Text>
          <Text style={styles.boldLine}>Plastic white organiser drawer</Text>
          <View style={styles.postActions}>
            <Text>👍 Like</Text>
            <Text>💬 Comment</Text>
            <Text>↗ Share</Text>
          </View>
        </View>
      </ScrollView>
      <BottomBar />
    </View>
  );
}

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
  avatar: { width: 38, height: 38, borderRadius: 19, backgroundColor: "#f3f5f7" },
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
    backgroundColor: "#f3f5f7",
  },
  storyName: { marginTop: 6, fontSize: 12 },
  post: { backgroundColor: "#fff", marginTop: 14, paddingBottom: 10 },
  postHeader: {
    flexDirection: "row",
    gap: 10,
    padding: 12,
    alignItems: "center",
  },
  postThumb: { width: 40, height: 40, borderRadius: 20, backgroundColor: "#f3f5f7" },
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
});
