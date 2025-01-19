import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";

import { Contact, ContactItem } from "@/components/ContactItem";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

const contacts: Contact[] = [
  { id: 1, name: "Misha Reyes", lastContacted: "2 months", status: "red" },
  { id: 2, name: "Erin Chong", lastContacted: "4 days", status: "green" },
  { id: 3, name: "Grace Zhang", lastContacted: "1 year", status: "yellow" },
];

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scroll}>
        <ThemedView style={styles.add}>
          <Button title="+" color="black"></Button>
        </ThemedView>
        {contacts.map((contact, index) => (
          <ContactItem key={index} contact={contact} />
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
    borderRadius: 10,
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
