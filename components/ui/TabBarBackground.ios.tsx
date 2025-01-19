import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function BlurTabBarBackground() {
  return (
    <View style={StyleSheet.absoluteFill}>
      {/* Custom tint color */}
      <View
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: "#ABCC75", opacity: 1 },
        ]}
      />
      {/* Blur effect */}
      <BlurView
        tint="default" // Keep the system tint
        intensity={10}
        style={StyleSheet.absoluteFill}
      />
    </View>
  );
}

export function useBottomTabOverflow() {
  const tabHeight = useBottomTabBarHeight();
  const { bottom } = useSafeAreaInsets();
  return tabHeight - bottom;
}
