import { StyleSheet, TextInput, View, Button, Text } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function AddContact() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.cancel}>
          <Button
            title="cancel"
            color="#8B8B8B"
            onPress={() => router.back()}
          />
        </ThemedView>
        <ThemedView style={styles.save}>
          <Button title="save" color="#8B8B8B" onPress={() => router.back()} />
        </ThemedView>
        <View style={styles.inputContainer}>
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
        </View>
      </ThemedView>
      {/* <TextInput
          style={styles.input}
          placeholder="Name"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="numeric"
        /> */}

      {/* <ThemedView style={{ flex: 1 }}> */}
      {/* <ThemedView style={styles.headerContainer}>
          <Pressable onPress={() => router.push("/")}>
            <ThemedText type="bodyText">Cancel</ThemedText>
          </Pressable>
          <ThemedText type="subtitle">New Contact</ThemedText>
          <Pressable onPress={() => router.push("/")}>
            <ThemedText type="bodyText">Done</ThemedText>
          </Pressable>
        </ThemedView> */}

      {/* <ThemedView style={styles.formContainer}>
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
          /> */}
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
      {/* </ThemedView>
      </ThemedView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    gap: 20,
    height: "100%",
    width: "100%",
  },
  inputContainer: {
    marginHorizontal: 20,
    marginTop: 80, // Add spacing to avoid overlaps
  },
  input: {
    height: 40,
    borderRadius: 20,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  cancel: {
    position: "absolute",
    top: 10,
    left: 20,
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
    position: "absolute",
    top: 10,
    right: 20,
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
  //   headerContainer: {
  //     alignItems: "center",
  //     justifyContent: "center",
  //     flexDirection: "row",
  //     gap: 30,
  //     margin: 20,
  //   },
  //   formContainer: {
  //     flex: 1,
  //     flexDirection: "column",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     gap: 8,
  //   },
  //   input: {
  //     height: 40,
  //     width: "80%",
  //     padding: 10,
  //     marginTop: 80,
  //     shadowOffset: { width: 0, height: 0 },
  //     shadowOpacity: 0.2,
  //     shadowRadius: 8,
  //     borderRadius: 10,
  //     fontFamily: "Figtree_400Regular",
  //   },
  //   inputAvailable: {
  //     height: 40,
  //     flex: 1,
  //     flexDirection: "row",
  //     gap: 10,
  //     alignItems: "center",
  //   },
});
