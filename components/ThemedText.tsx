import { Text, type TextProps, StyleSheet } from "react-native";

export type ThemedTextProps = TextProps & {
  color?: string;
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "yourTimezone"
    | "bodyText";
};

export function ThemedText({
  style,
  color,
  type = "default",
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "yourTimezone" ? styles.yourTimezone : undefined,
        type === "bodyText" ? styles.bodyText : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Figtree_400Regular",
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Figtree_700Bold",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
    fontFamily: "SpaceGrotesk_700Bold",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Figtree_600SemiBold",
  },
  yourTimezone: {
    fontSize: 15,
    fontFamily: "Figtree_400Regular",
  },
  bodyText: {
    fontSize: 20,
    fontFamily: "Figtree_400Regular",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
    fontFamily: "Figtree_400Regular",
  },
});
