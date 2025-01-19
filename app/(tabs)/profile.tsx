import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { profile } from "../data";
import { useEffect, useState } from "react";
import { getCurrentTime } from "../utils/utils";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const [currentTime, setCurrentTime] = useState("");
  const router = useRouter();

  useEffect(() => {
    setCurrentTime(getCurrentTime());
  }, []);

  return (
    <SafeAreaView>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.edit}>
          <Button title="edit" color="#8B8B8B" onPress={() => {}} />
        </ThemedView>
        <View style={styles.imageContainer}>
          <Image source={profile.image} style={styles.image} />
        </View>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">{profile.name}</ThemedText>
          <ThemedView style={styles.stepContainer}>
            <ThemedView style={styles.statusCircle}></ThemedView>
            <ThemedText type="subtitle">
              {currentTime} {profile.timezone}
            </ThemedText>
          </ThemedView>
          <ThemedText type="yourTimezone">you are available 8am-3pm</ThemedText>
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 20,
    height: "100%",
    width: "100%",
  },
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
    alignContent: "center",
    justifyContent: "center",
  },
  stepContainer: {
    gap: 10,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 150,
    height: 170,
    borderRadius: 70,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  statusCircle: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "#00FF00",
  },
  edit: {
    margin: 20,
    flexDirection: "row",
    alignSelf: "flex-end",
    borderRadius: 80,
    marginBottom: 5,
    paddingHorizontal: 5,
    borderColor: "#DDDDDD",
    borderStyle: "solid",
    borderWidth: 0.5,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});
