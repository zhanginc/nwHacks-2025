import {
  View,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ThemedView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="purple" />
        <View style={styles.circleContainer}>
          <Image
            source={require("@/assets/images/partial-react-logo.png")}
            style={styles.reactLogo}
          />
        </View>

        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Erin Chong</ThemedText>
          <ThemedView style={styles.stepContainer}>
            <ThemedView style={styles.statusCircle}></ThemedView>
            <ThemedText type="subtitle">9:41 pm PST</ThemedText>
          </ThemedView>
          <ThemedText type="yourTimezone">10:41 pm MST</ThemedText>
          <ThemedText type="bodyText">Available Today 5pm-11pm</ThemedText>
          <ThemedText type="bodyText">last called 1 year ago</ThemedText>
          <TouchableOpacity>
            <ThemedView style={styles.phoneCircle}>
              <Image
                source={require("@/assets/images/phone.png")}
                style={styles.phoneImage}
              />
            </ThemedView>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
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
    gap: 20,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  circleContainer: {
    width: 150,
    height: 150,
    borderRadius: 70,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
  },
  statusCircle: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "#00FF00",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
  },
  phoneCircle: {
    width: 60, // Size of the circle
    height: 60, // Size of the circle
    borderRadius: 60, // Half of width/height for a perfect circle
    backgroundColor: "white", // Grey background
    justifyContent: "center", // Center image horizontally
    alignItems: "center", // Center image vertically

    borderColor: "#DDDDDD",
    borderStyle: "solid",
    borderWidth: 0.5,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  phoneImage: {
    width: 30, // Adjust size as needed
    height: 30,
    resizeMode: "contain", // Ensure image fits within the circle
  },
});
