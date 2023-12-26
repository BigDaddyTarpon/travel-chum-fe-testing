import { StyleSheet, Text, View } from "react-native";


export default function Home() {
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
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    item: {
      padding: 20,
      fontSize: 15,
      marginTop: 5,
    },
  });