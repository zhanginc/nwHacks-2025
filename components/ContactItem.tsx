import { Text, type TextProps, Image, StyleSheet } from "react-native";

import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

export type ContactItemProps = TextProps & {
  contact: {
    name: string;
    lastContacted: string;
    status: string;
  };
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
      <ThemedText>{contact.name}</ThemedText>
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
  },
  image: {
    height: 50,
    width: 50,
    margin: 10,
    borderRadius: "100%",
  },
});
