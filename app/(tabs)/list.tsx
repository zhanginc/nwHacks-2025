import { StyleSheet, SafeAreaView } from "react-native";

import { ContactItem } from "@/components/ContactItem";

type Contact = {
  name: string;
  lastContacted: string;
  status: "red" | "green" | "yellow"; // Limit status to specific strings
};

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
      {contacts.map((contact, index) => (
        <ContactItem key={index} contact={contact} />
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 5,
  },
});
