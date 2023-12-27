import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function User() {
    return (
      <View style={styles.container}>
        <Text>Hello from User page</Text>
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      alignItems: "center",
      justifyContent: "center",
    },
})