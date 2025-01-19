import { StyleSheet, SafeAreaView, ScrollView, Button } from "react-native";

import { ContactItem } from "@/components/ContactItem";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { contacts } from "../data";

export default function TabTwoScreen() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <ScrollView style={styles.scroll}>
        <ThemedView style={styles.add}>
          <Button
            title="+"
            color="#8B8B8B"
            onPress={() => router.push(`/add`)}
          />
        </ThemedView>
        {contacts.map((contact, index) => (
          <ContactItem
            key={index}
            contact={contact}
            onPress={() => router.push(`/contact/${contact.id}`)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
  add: {
    flexDirection: "row",
    alignSelf: "flex-end",
    borderRadius: "100%",
    marginRight: 20,
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
