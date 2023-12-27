import { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Constants from 'expo-constants'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from 'react-native-paper';
import {MyHeaderComponent} from './components/header';
import { Appbar, Switch} from 'react-native-paper';
import OptionsForm from "./components/options-form";
import Home from "./components/home";
import User from "./components/user";
import Map from "./components/map";



const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Local Home in App!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
   
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    
      <Text>Local Settings in App!</Text>
    </View>
  );
}

{/* tried to use: <StatusBar style="auto" />  but needed 'Constants' */}

export default function App() {
  return (
    <PaperProvider>
    <>
    <Appbar style={{ marginTop: Constants.statusBarHeight }}>
       <Appbar.Content title="Title"  />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Switch
          color={'red'}
          value={'0'}
          onValueChange={'0'}
        />
    </Appbar>
    </>
    <NavigationContainer >
      <Tab.Navigator >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Local Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Options Form" component={OptionsForm} />
        <Tab.Screen name="User" component={User} />
        <Tab.Screen name="Map" component={Map} />
      </Tab.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

// style={{ marginTop: Constants.statusBarHeight }}

{/* no error, but no display;
 <Tab.Navigator screenOptions={{
    header: () => (
      <Appbar.Header>
        <Appbar.Content title="title" />
      </Appbar.Header>
    )
  }}></Tab.Navigator> */}

//   I think the code is below, but also I think the tabs ARE the header, so cant see additional header from top tab nav, need to add above; 
//   headerShown="true"
//   screenOptions={{
// header:()=>(<MyHeaderComponent />)
// }}

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
