import { StyleSheet, TextInput, Pressable, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function AddContact() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <ThemedView style={{ flex: 1 }}>
        <ThemedView style={styles.headerContainer}>
          <Pressable onPress={() => router.push("/")}>
            <ThemedText type="bodyText">Cancel</ThemedText>
          </Pressable>
          <ThemedText type="subtitle">New Contact</ThemedText>
          <Pressable onPress={() => router.push("/")}>
            <ThemedText type="bodyText">Done</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Timezone"
            keyboardType="default"
          />
          {/* <View style={styles.inputAvailable}>
            <TextInput
              style={styles.input}
              placeholder="Starting Available Time"
              keyboardType="default"
            />
            -
            <TextInput
              style={styles.input}
              placeholder="Ending Available Time"
              keyboardType="default"
            />
          </View> */}
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 30,
    margin: 20,
  },
  formContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  input: {
    height: 40,
    width: "80%",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    borderRadius: 10,
    fontFamily: "Figtree_400Regular",
  },
  inputAvailable: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
