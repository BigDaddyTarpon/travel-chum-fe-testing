import { StyleSheet, Text, View } from "react-native";



export default function Map() {
    return (
      <View style={styles.container}>
        <Text>Hello from Fake Map</Text>
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