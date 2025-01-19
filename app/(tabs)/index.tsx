import { Image, StyleSheet, Pressable, SafeAreaView } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";

const overlayItems = [
  {
    id: 3, // misha
    source: require("@/assets/images/applesName/mishaIcon.png"),
    position: { top: 230, right: 20 },
  },
  {
    id: 2, // grace
    source: require("@/assets/images/applesName/graceIcon.png"),
    position: { top: 120, left: 150 },
  },
  {
    id: 1, // bill
    source: require("@/assets/images/applesName/billIcon.png"),
    position: { bottom: 200, left: 20 },
  },
  {
    id: 5, // von
    source: require("@/assets/images/applesName/vonIcon.png"),
    position: { bottom: 90, left: 150 },
  },
  {
    id: 4, // myah
    source: require("@/assets/images/applesName/myahIcon.png"),
    position: { top: 230, left: 20 },
  },
  {
    id: 6, // alexa
    source: require("@/assets/images/applesName/alexaIcon.png"),
    position: { bottom: 200, right: 20 },
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <ThemedView>
        <Image
          source={require("@/assets/images/homeBackground.png")}
          style={styles.image}
        />
        <ThemedText style={styles.title} type="title">
          your core circle
        </ThemedText>
        {overlayItems.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => router.push(`/contact/${item.id}`)}
            style={[styles.overlayImage, item.position]}
          >
            <Image source={item.source} />
          </Pressable>
        ))}
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    position: "absolute",
    top: 30,
    left: 100,
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlayImage: {
    position: "absolute",
  },
});
