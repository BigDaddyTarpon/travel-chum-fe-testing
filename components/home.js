
import { StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";

export default function Home() {
    // let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
  return (
    <View style={styles.container}>
      <Text>Hello from Home page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
});
