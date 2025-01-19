import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
  Text,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";
import { contacts, profile } from "../data";
import { useEffect, useState } from "react";
import { callPhoneNumber, getCurrentTime } from "../utils/utils";

export default function ContactDetails() {
  const [currentTime, setCurrentTime] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const contact = contacts.find((c) => c.id === Number(id));

  useEffect(() => {
    setCurrentTime(getCurrentTime());
  }, []);

  if (!id || !contact) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Error: Contact ID not found</Text>
        <Button title="Go Back" color="#8B8B8B" onPress={() => router.back()} />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.back}>
          <Button title="back" color="#8B8B8B" onPress={() => router.back()} />
        </ThemedView>
        <ThemedView style={styles.edit}>
          <Button title="edit" color="#8B8B8B" onPress={() => {}} />
        </ThemedView>
        <View style={styles.imageContainer}>
          <Image source={contact.image} style={styles.image} />
        </View>

        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">{contact.name}</ThemedText>
          <ThemedView style={styles.stepContainer}>
            <ThemedView style={styles.statusCircle}></ThemedView>
            <ThemedText type="subtitle">
              {currentTime} {profile.timezone}
            </ThemedText>
          </ThemedView>
          <ThemedText type="yourTimezone" color="#808080">
            10:41 pm {contact.timezone}
          </ThemedText>
          <ThemedText type="yourTimezone">
            available {contact.available}
          </ThemedText>
          <ThemedText> </ThemedText>
          <ThemedText type="bodyText">
            last called {contact.lastContacted} ago
          </ThemedText>
          <TouchableOpacity onPress={() => callPhoneNumber("6046557173")}>
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
    padding: 20,
    gap: 20,
    height: "100%",
    width: "100%",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  error: {
    fontSize: 18,
    color: "red",
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
  statusCircle: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "#00FF00",
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
  phoneCircle: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",

    borderColor: "#DDDDDD",
    borderStyle: "solid",
    borderWidth: 0.5,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  phoneImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    opacity: 0.3,
  },
  back: {
    position: "absolute",
    top: 10,
    left: 20,
    flexDirection: "row",
    alignSelf: "flex-start",
    borderRadius: 80,
    marginTop: 10,
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
  edit: {
    position: "absolute",
    top: 10,
    right: 20,
    flexDirection: "row",
    alignSelf: "flex-end",
    borderRadius: 80,
    marginTop: 10,
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
