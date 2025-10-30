import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";

export default function Marketplace() {
  const items = [
    {
      title: " For rent: wooden farmhouse",
      price: "$9000",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format",
      tag: "Nearby",
    },
    {
      title: "Eyebrows threading",
      price: "$7",
      img: "https://www.prayoshathreadingbar.ca/wp-content/uploads/2016/01/thread1.jpg",
      tag: "Nearby",
    },
    {
      title: "Room to rent",
      price: "$1100",
      img: "https://tse2.mm.bing.net/th/id/OIP.uuFnLB4KoW_w7kdcNz1K-AHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
      tag: "Just listed",
    },
    {
      title: "Looking a owner for car…",
      price: "$1",
      img: "https://tse3.mm.bing.net/th/id/OIP.ROpZOUnQtG27_O_XGvPYAgHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Aesthetic Drawer",
      price: "$150",
      img: "https://i.pinimg.com/736x/63/fa/8a/63fa8a66eb4dbf3af8466683ee958acb.jpg",
      tag: "Nearby",
    },
    {
      title: "Patio set",
      price: "$250",
      img: "https://th.bing.com/th/id/R.31cadd5c488cd340063ccab56727de12?rik=XCagbQcL0vve3Q&riu=http%3a%2f%2faecojoy.store%2fcdn%2fshop%2fcollections%2fPatio-Funiture-Set-16076GR_cd5e698d-86c3-449c-be05-bac0b7dd1175.jpg%3fv%3d1739443536&ehk=Ct3WCuQrQk5drr0nBuxPhnCsyjDulYtVi7Pd5DV9Ibs%3d&risl=&pid=ImgRaw&r=0",
    },
  ];

  return (
    <View style={styles.screen}>
      <Header />

      <View style={styles.topTabsRow}>
        <Text style={[styles.topTab, styles.muted]}>Sell</Text>
        <Text style={[styles.topTab, styles.selected]}>For you</Text>
        <Text style={[styles.topTab, styles.muted]}>Categories</Text>
        <Text style={styles.city}>📍 Calgary, AB</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <Text style={styles.sectionTitle}>Today's picks</Text>

        <View style={styles.grid}>
   {items.map((it, i) => (
    <View key={i} style={styles.card}>
      <Image source={{ uri: it.img }} style={styles.image} />
      <Text style={styles.badge}>{it.tag}</Text>
      <Text style={styles.priceTitle}>
        {it.price} · {it.title}
      </Text>
    </View>
   ))}
</View>

      </ScrollView>

      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#fff" },
  topTabsRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 14,
    marginTop: 12,
  },
  topTab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    fontWeight: "600",
  },
  selected: { backgroundColor: "#EAF2FF", color: "#1877F2" },
  muted: { color: "#111" },
  city: { marginLeft: "auto", color: "#1877F2" },
  sectionTitle: { fontSize: 20, fontWeight: "bold", margin: 12 },
  grid: {
    paddingHorizontal: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
  },
  card: { width: "48%" },
  image: { width: "100%", height: 150, borderRadius: 6, backgroundColor: "#f3f5f7" },
  badge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    borderWidth: 0.5,
    borderColor: "#e3e3e3",
  } as any,
  priceTitle: { marginTop: 6, fontWeight: "600" },
  
});

