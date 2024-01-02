import { useState, useContext } from "react";
import { PreferencesContext } from "../context/PreferencesContext";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  TextInput,
  List,
  Modal,
  Portal,
  PaperProvider,
  Button,
  SegmentedButtons,
  Dialog,
  RadioButton,
} from "react-native-paper";

import { useForm, Controller } from "react-hook-form";

import { UserContext } from "../context/UserContext";
import UserLoginForm from "./userlogin";
import UserNotesForm from "./usernotes";
import NewUserForm from "./newuser";

export default function User(theme) {
 
  const{ user } = useContext(UserContext);

  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Welcome! {user.username} is currently logged in</Text> 

        <Image
          style={styles.Image}
          source={require("../assets/travel-chum-logo.png")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "70%",
    height: "70%",
  },
  Image: {
    flex: 1,

    alignSelf: "center",
    height: "100%",
    width: "70%",
    resizeMode: "contain",
  },
});
