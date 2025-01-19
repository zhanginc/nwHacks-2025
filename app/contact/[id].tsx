import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
  id: string;
  name: string;
  lastContacted: string;
  status: string;
};

export default function ContactDetails() {
  const route = useRoute();
  const { name, lastContacted, status } = route.params as RouteParams;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text>Last Contacted: {lastContacted}</Text>
      <Text>Status: {status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
