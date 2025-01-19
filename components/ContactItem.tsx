import {
  type TextProps,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Contact } from "@/app/utils/types";

export type ContactItemProps = TextProps & {
  contact: Contact;
};

export function ContactItem({ contact, onPress }: ContactItemProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <ThemedView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={contact.image} />
        </View>
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
    borderRadius: 20,
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
  imageContainer: {
    width: 50,
    height: 55,
    marginHorizontal: 12,
    marginVertical: 10,
    borderRadius: 70,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
});
