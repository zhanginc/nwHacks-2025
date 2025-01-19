import { Alert, Linking } from "react-native";

export const getCurrentTime = () => {
  var hour = new Date().getHours(); //Current Hours
  var min = new Date().getMinutes(); //Current Minutes
  var am_pm = "am";
  if (hour > 11) {
    am_pm = "pm";
    if (hour > 12) {
      hour = hour - 12;
    }
  }
  if (hour == 0) {
    hour = 12;
  }
  const hourString = hour < 10 ? "0" + hour : hour;
  const minString = min < 10 ? "0" + min : min;

  return hourString + ":" + minString + " " + am_pm;
};

export const callPhoneNumber = (phoneNumber: string) => {
  const url = `tel:${phoneNumber}`;
  Linking.canOpenURL(url)
    .then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        Alert.alert("Error", "Your device does not support phone calls");
      }
    })
    .catch((err) => console.error("An error occurred", err));
};
