import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";

export default function OptionsForm() {
    return (
      <View style={styles.container}>
        <Text>Hello from Options Form page</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
})