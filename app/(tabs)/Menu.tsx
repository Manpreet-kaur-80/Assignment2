import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";

export default function Menu() {

  return (
    <View style={styles.screen}>
      <Header />

     <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Top section with name of page*/}
        <View style={styles.topRow}>
          <Text style={styles.title}>Menu</Text>
          <View style={styles.icons}>
            <Text style={styles.icon}>⚙️</Text>
            <Text style={styles.icon}>🔍</Text>
          </View>
        </View>

        {/* Profile box */}
        <View style={styles.profileBox}>
  <Image
    source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }} 
    style={styles.avatar}
  />
  <Text style={styles.name}>Mann Kaur</Text>
         <View style={styles.rightSide}>
          <Text style={styles.refresh}>🔄</Text>
          <View style={styles.notifyDot}>
            <Text style={styles.notifyText}>2</Text>
          </View>
         </View>
</View>

     {/* Shortcuts Section */}
<Text style={styles.shortcutTitle}>Your shortcuts</Text>

<View style={styles.shortcutRow}>
  <View style={styles.shortcutCard}>
    <Image
      source={{ uri: "https://greenweddingshoes.com/wp-content/uploads/2024/02/pastel-pink-classy-simple-spring-nails-with-flower-nail-art-thumb.jpg" }}
      style={styles.shortcutImg}
    />
    <Text style={styles.shortcutText}>Nailsbyray</Text>
  </View>

  <View style={styles.shortcutCard}>
    <Image
      source={{ uri: "https://tse1.mm.bing.net/th/id/OIP.Mw3bRQy4UG14Vjewv3cSRgHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3" }}
      style={styles.shortcutImg}
    />
    <Text style={styles.shortcutText}>Karmjeet Dhillon</Text>
  </View>

  <View style={styles.shortcutCard}>
    <Image
      source={{ uri: "https://images.pexels.com/photos/15160794/pexels-photo-15160794.jpeg?cs=srgb&dl=pexels-daniel-duarte-270529097-15160794.jpg&fm=jpg" }}
      style={styles.shortcutImg}
    />
    <Text style={styles.shortcutText}>Sidharth Singh</Text>
  </View>

  <View style={styles.shortcutCard}>
    <Image
      source={{ uri: "https://img.freepik.com/free-photo/portrait-girl-holding-flowers-plant-park_23-2148163927.jpg?semt=ais_hybrid&w=740" }}
      style={styles.shortcutImg}
    />
    <Text style={styles.shortcutText}>Krish Choudhary</Text>
  </View>
</View>

{/* Menu grid */}
<View style={styles.grid}>
  <View style={styles.row}>
    <View style={styles.card}>
      <Text style={styles.cardText}>👥 Friends</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.cardText}>📊 Professional dashboard</Text>
    </View>
  </View>

  <View style={styles.row}>
    <View style={styles.card}>
      <Text style={styles.cardText}>🏬 Marketplace</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.cardText}>📄 Pages</Text>
    </View>
  </View>

  <View style={styles.row}>
    <View style={styles.card}>
      <Text style={styles.cardText}>📰 Feeds</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.cardText}>🔖 Saved</Text>
    </View>
  </View>

  <View style={styles.row}>
    <View style={styles.card}>
      <Text style={styles.cardText}>👫 Groups</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.cardText}>🎞️ Reels</Text>
    </View>
  </View>

  <View style={styles.row}>
    <View style={styles.card}>
      <Text style={styles.cardText}>🕓 Memories</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.cardText}>💙 Support</Text>
    </View>
  </View>

  <View style={styles.row}>
    <View style={styles.card}>
      <Text style={styles.cardText}>📢 Ad Center</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.cardText}>💗 Dating</Text>
    </View>
  </View>
</View>
 
    </ScrollView>
    <BottomBar /> 
    </View>
  );
}
{/* styling for page */}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#f2f3f5" },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: 10,
    alignItems: "center",
  },
  title: { fontSize: 28, fontWeight: "bold" },
  icons: { flexDirection: "row", gap: 12 },
  icon: { fontSize: 20 },
  profileBox: {
    backgroundColor: "#fff",
    marginHorizontal: 12,
    marginTop: 12,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: "#ddd" },
  name: { fontWeight: "600", fontSize: 16, marginLeft: 10 },
  refresh: { fontSize: 20,},
  notifyDot: {
    backgroundColor: "#b66573ff",
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  notifyText: { color: "#fff", fontSize: 10, fontWeight: "700" },
  rightSide: {
  flexDirection: "row",
  right: 15,
  position: "absolute",
  alignItems: "center",
  gap: 5,
},
  shortcutTitle: {
    fontWeight: "600",
    marginTop: 18,
    marginLeft: 16,
    marginBottom: 8,
  },
  shortcutScroll: { paddingHorizontal: 10 },
  shortcutCard: { alignItems: "center", marginRight: 14 },
  shortcutImg: {
    width: 65,
    height: 65,
    borderRadius: 32,
    backgroundColor: "#ccc",
  },
  shortcutText: {
    fontSize: 12,
    marginTop: 6,
    maxWidth: 65,
    textAlign: "center",
  },
  shortcutRow: {
  flexDirection: "row",
  justifyContent: "flex-start",
  marginHorizontal: 10,
  marginBottom: 15,
},
  grid: { paddingHorizontal: 10, marginTop: 16 },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 12 },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    justifyContent: "center",
  },
  cardText: { fontWeight: "600", fontSize: 15 },
});
