import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function BottomBar() {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push("/Home")} style={styles.item}>
        <Text style={[styles.icon, styles.active]}>🏠</Text>
        <Text style={[styles.label, styles.active]}>Home</Text>
      </Pressable>

      <View style={styles.item}>
        <Text style={styles.icon}>🎬</Text>
        <Text style={styles.label}>Reels</Text>
      </View>

      <Pressable onPress={() => router.push("/Marketplace")} style={styles.item}>
        <Text style={styles.icon}>🛍️</Text>
        <Text style={styles.label}>Marketplace</Text>
      </Pressable>

      <View style={styles.item}>
        <Text style={styles.icon}>⭐</Text>
        <Text style={styles.label}>Events</Text>
      </View>

      <Pressable onPress={() => router.push("/Notifications")} style={styles.item}>
        <View style={styles.badgeWrap}>
          <Text style={styles.icon}>🔔</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>5</Text>
          </View>
        </View>
        <Text style={styles.label}>Notifications</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/Menu")} style={styles.item}>
        <Text style={styles.icon}>👤</Text>
        <Text style={styles.label}>Menu</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f2f3f5", // light gray like Facebook
    paddingVertical: 8,
    borderTopWidth: 0.5,
    borderColor: "#ddd",
  },
  item: {
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
    color: "#111",
  },
  label: {
    fontSize: 12,
    color: "#111",
    marginTop: 2,
  },
  active: {
    color: "#1877F2", // Facebook blue for active page
    fontWeight: "600",
  },
  badgeWrap: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -10,
    backgroundColor: "#E41E3F", // red notification badge
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});
