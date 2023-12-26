import { StyleSheet, Text, View } from "react-native";

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
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
})