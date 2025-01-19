import { Text, type TextProps, Image, StyleSheet } from "react-native";

import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

export type Contact = {
  name: string;
  lastContacted: string;
  status: "red" | "green" | "yellow";
};

export type ContactItemProps = TextProps & {
  contact: Contact;
};

export function ContactItem({ contact }: ContactItemProps) {
  return (
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
