import {
  type TextProps,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { useNavigation, useRouter } from "expo-router";

export type Contact = {
  id: number;
  name: string;
  lastContacted: string;
  status: "red" | "green" | "yellow";
};

export type ContactItemProps = TextProps & {
  contact: Contact;
};

export function ContactItem({ contact }: ContactItemProps) {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <TouchableOpacity
    // onPress={() =>
    //     navigation.navigate("contact/1")}
    >
      <ThemedView style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://img.freepik.com/free-vector/vector-red-apple-food-sticker-clipart_53876-170575.jpg",
          }}
        />
        <ThemedView style={styles.textContainer}>
          <ThemedText>{contact.name}</ThemedText>
          <ThemedText color="#B3B3B3">
            last called {contact.lastContacted} ago
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#DDDDDD",
    borderStyle: "solid",
    borderWidth: 0.5,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    height: 50,
    width: 50,
    margin: 10,
    borderRadius: "100%",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
});
