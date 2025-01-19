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
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  yourTimezone: {
    fontSize: 15,
    color: "#808080",
  },
  bodyText: {
    fontSize: 20,
    color: "#808080",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
