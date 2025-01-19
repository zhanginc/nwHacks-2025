import { ThemedView } from "@/components/ThemedView";
import * as React from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";

export default function AddButton() {
  return (
    <Pressable>
      <ThemedView style={styles.circle}>
        <Image
          source={require("@/assets/images/plus.png")}
          style={styles.image}
        />
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 5,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "#DFDDDD",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
  },
});
