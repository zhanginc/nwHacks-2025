import { StyleSheet, SafeAreaView, ScrollView } from "react-native";

import { Contact, ContactItem } from "@/components/ContactItem";

const contacts: Contact[] = [
  {
    name: "Misha Reyes",
    lastContacted: "2 months",
    status: "red",
  },
  {
    name: "Erin Taylor",
    lastContacted: "4 days",
    status: "green",
  },
  {
    name: "Grace Zhang",
    lastContacted: "1 year",
    status: "yellow",
  },
];

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        {contacts.map((contact, index) => (
          <ContactItem key={index} contact={contact} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 5,
  },
  scroll: {
    height: "100%",
  },
});
