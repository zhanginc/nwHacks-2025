import {
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";

const overlayItems = [
  {
    id: 3,
    source: require("@/assets/images/applesName/mishaIcon.png"),
    position: { top: 150, right: 10 },
  },
  {
    id: 2,
    source: require("@/assets/images/applesName/graceIcon.png"),
    position: { top: 70, left: 140 },
  },
  {
    id: 1,
    source: require("@/assets/images/applesName/billIcon.png"),
    position: { bottom: 150, left: 20 },
  },
  {
    id: 5,
    source: require("@/assets/images/applesName/vonIcon.png"),
    position: { bottom: 50, left: 140 },
  },
  {
    id: 4,
    source: require("@/assets/images/applesName/myahIcon.png"),
    position: { top: 150, left: 10 },
  },
  {
    id: 6,
    source: require("@/assets/images/applesName/alexaIcon.png"),
    position: { bottom: 150, right: 20 },
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ThemedView>
      <Image
        source={require("@/assets/images/homeBackground.png")}
        style={styles.image}
      />
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
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlayImage: {
    position: "absolute",
  },
});
