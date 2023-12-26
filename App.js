import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Constants from 'expo-constants'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import OptionsForm from "./components/options-form";
import Home from "./components/home";
import User from "./components/user";
import Map from "./components/map";

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Local Home in App!</Text>
    </SafeAreaView>
  );
}

function SettingsScreen() {
  return (
   
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    
      <Text>Local Settings in App!</Text>
    </View>
  );
}

{/* tried to use: <StatusBar style="auto" />  but needed 'constraints' */}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator style={{ marginTop: Constants.statusBarHeight }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Local Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Options Form" component={OptionsForm} />
        <Tab.Screen name="User" component={User} />
        <Tab.Screen name="Map" component={Map} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "70%",
    height: "70%",
  },
});
