import React from "react";
import { PreferencesContext } from "./PreferencesContext";
import { UserContext } from "./UserContext";
import { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import Constants from "expo-constants";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  useTheme,
} from "@react-navigation/native";
import {
  PaperProvider,
  adaptNavigationTheme,
  Dialog,
} from "react-native-paper";
import { MyHeaderComponent } from "./components/header";
import {
  Appbar,
  Switch,
  Badge,
  MD3DarkTheme,
  MD3LightTheme,
} from "react-native-paper";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import merge from "deepmerge";
import OptionsForm from "./components/options-form";
import Home from "./components/home";
import User from "./components/user";
import Map from "./components/map";
import NewUserForm from "./components/newuser";
import UserLoginForm from "./components/userlogin";
import UserNotesForm from "./components/usernotes";

const Tab = createMaterialTopTabNavigator();
const BottomTab = createMaterialBottomTabNavigator();
function HomeScreen() {
  return (
    <>
      <Dialog visible={true}>
        <Dialog.Title>
          hello from dialog title on local home (not explicit use of theme)
        </Dialog.Title>
        <Dialog.Content>
          <Text>This is simple dialog</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <TextInput
            label="Enter Username"
            placeholder="IT WORKS TO type here"
          ></TextInput>
        </Dialog.Actions>
        <Dialog.Actions></Dialog.Actions>
      </Dialog>
    </>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Local Settings in App!</Text>
      <Text>Local Settings in App!</Text>
      <Text style={{ color: "white" }}>Hi from local page.</Text>
      <Text>Local Settings in App!</Text>
      <Image
        style={styles.Image}
        source={require("./assets/travel-chum-logo.png")}
      />
    </View>
  );
}

export default function App() {
  const user = useContext(UserContext);

  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });

  const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme);
  const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);

  const [isThemeDark, setIsThemeDark] = React.useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <UserContext.Provider value={user}>
        <PaperProvider theme={theme}>
          <>
            <Appbar style={{ marginTop: Constants.statusBarHeight }}>
              <Appbar.Content title="Travel Chum" />
              <Image
                style={styles.Image}
                source={require("./assets/travel-chum-logo.png")}
              />

              <Appbar.Action icon="theme-light-dark" />
              <Switch
                color={"red"}
                value={isThemeDark}
                onValueChange={toggleTheme}
              />
              <Badge>dark</Badge>

              <Appbar.Action icon="lightbulb-off-outline" />
            </Appbar>
          </>
          <NavigationContainer theme={theme}>
            <Tab.Navigator>
              <Tab.Screen name="Home " component={Home} />
              {/* <Tab.Screen name="Test Page" component={HomeScreen} />
            <Tab.Screen name="Test Pg2" component={SettingsScreen} /> */}
              <Tab.Screen name="User" component={User} />
              <Tab.Screen
                name="BottomTab"
                component={() => (
                  <BottomTab.Navigator>
                    <BottomTab.Screen name="User" component={User} />
                    <BottomTab.Screen name="Login" component={UserLoginForm} />
                    <BottomTab.Screen name="New User" component={NewUserForm} />
                    <BottomTab.Screen
                      name="User Notes"
                      component={UserNotesForm}
                    />
                  </BottomTab.Navigator>
                )}
              />
              {/* <Tab.Screen name="New User" component={NewUserForm} /> */}
              <Tab.Screen name="Plan a Trip" component={OptionsForm} />
              <Tab.Screen name="Map" component={Map} />
            </Tab.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </UserContext.Provider>
    </PreferencesContext.Provider>
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
  Image: {
    height: "100%",
    width: "15%",
    // alignSelf: "center",
    // paddingLeft: 100,
    resizeMode: "contain",
  },
});
