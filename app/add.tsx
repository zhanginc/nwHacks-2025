import { StyleSheet, TextInput, View, Button, Text } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";

export default function AddContact() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.headerContainer}>
          <ThemedView style={styles.cancel}>
            <Button
              title="cancel"
              color="#8B8B8B"
              onPress={() => router.back()}
            />
          </ThemedView>
          <ThemedText type="bodyText">New Contact</ThemedText>
          <ThemedView style={styles.save}>
            <Button
              title="save"
              color="#8B8B8B"
              onPress={() => router.back()}
            />
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            keyboardType="default"
            placeholderTextColor="gray"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="numeric"
            placeholderTextColor="gray"
          />
          <TextInput
            style={styles.input}
            placeholder="Timezone"
            keyboardType="default"
            placeholderTextColor="gray"
          />
          <TextInput
            style={styles.input}
            placeholder="Available Times"
            keyboardType="numeric"
            placeholderTextColor="gray"
          />
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    height: "100%",
    width: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  inputContainer: {
    marginHorizontal: 20,
    gap: 2,
  },
  input: {
    height: 40,
    borderRadius: 10,
    borderColor: "#DDDDDD",
    backgroundColor: "#fff",
    marginTop: 10,
    marginBottom: 5,
    borderStyle: "solid",
    borderWidth: 0.5,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    fontFamily: "Figtree_400Regular",
    padding: 10,
  },
  cancel: {
    flexDirection: "row",
    alignSelf: "flex-start",
    borderRadius: 80,
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
  save: {
    flexDirection: "row",
    alignSelf: "flex-end",
    borderRadius: 80,
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
