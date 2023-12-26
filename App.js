import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import getPolylineCoordinates, { getPoisFromMarker } from "./utils/utils";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import OptionsForm from "./components/options-form";
import Home from "./components/home";
import User from "./components/user";

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Options" component={OptionsForm} />
      <Tab.Screen name="User" component={User} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// export default function App() {
//   const [polylineCoordinates, setPolylineCoordinates] = useState([]);
//   const [poiMarkers, setPoiMarkers] = useState([]);
//   useEffect(() => {
//     getPolylineCoordinates().then((coordinates) => {
//       setPolylineCoordinates(coordinates);
//     });
//   }, []);
//   function handleMarkerPress(coordinates) {
//     getPoisFromMarker(coordinates).then((results) => {
//       console.log(results);
//       setPoiMarkers(results);
//     });
//   }
//   return <View style={styles.container}></View>;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   map: {
//     width: "70%",
//     height: "70%",
//   },
// });
