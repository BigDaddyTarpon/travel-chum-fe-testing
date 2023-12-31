import { useState, useContext } from "react";
import { PreferencesContext } from "../PreferencesContext";

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
} from "react-native-paper";

import { RadioButton } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { UserContext } from "../UserContext";
import UserLoginForm from "./userlogin";
import UserNotesForm from "./usernotes";
import NewUserForm from "./newuser";

let knownUsersArray = [{ password: "Password(1)", username: "Guest" }];

export default function User(theme) {
  const [user, setUser] = useState({});
  const [note, setNote] = useState({});
  useContext(UserContext);

  return (
    // <>
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //    <Text>User!</Text>

    //   <Image style={styles.Image} source={require('./assets/travel-chum-logo.png')} />

    // </View>

    // </>

    <>
      {/* <PreferencesContext.Provider value={preferences}> */}

      <></>

      {/* </PreferencesContext.Provider> */}
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
