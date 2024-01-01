// import React from "react";
// import { useState, useContext } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   Image,
//   TextInput,
// } from "react-native";
// import Constants from "expo-constants";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
// import {
//   DefaultTheme as NavigationDefaultTheme,
//   NavigationContainer,
//   DarkTheme as NavigationDarkTheme,
//   useTheme,
// } from "@react-navigation/native";
// import {
//   PaperProvider,
//   adaptNavigationTheme,
//   Dialog,
//   Appbar,
//   Switch,
//   Badge,
//   MD3DarkTheme,
//   MD3LightTheme,
// } from "react-native-paper";
// import merge from "deepmerge";

// import { PreferencesContext } from "../context/PreferencesContext";
// import { UserContext } from "../context/UserContext";

// import User from "./components/user";
// import Map from "./components/map";
// import NewUserForm from "./components/newuser";
// import UserLoginForm from "./components/userlogin";
// import UserNotesForm from "./components/usernotes";

// const Tab = createMaterialTopTabNavigator();
// const BottomTab = createMaterialBottomTabNavigator();

// export default function BottomTabScreen() {
//   // const [note, setNote] = useState({});

//   return (
//     <BottomTab.Navigator>
//       <BottomTab.Screen name="User Details" component={User} />
//       <BottomTab.Screen name="Login" component={UserLoginForm} />
//       <BottomTab.Screen name="New User" component={NewUserForm} />
//       <BottomTab.Screen name="User Notes" component={UserNotesForm} />
//     </BottomTab.Navigator>
//   );
// }
