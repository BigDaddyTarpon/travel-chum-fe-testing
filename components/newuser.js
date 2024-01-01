import { useState, useContext } from "react";

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

import { useForm, Controller } from "react-hook-form";
import { UserContext } from "../context/UserContext";

let knownUsersArray = [{ password: "Password(1)", username: "Guest" }];

export default function NewUserForm(theme) {
  // const [user, setUser] = useState({});
  // guest is {"password": "Password(1)", "username": "Guest"}
  const { user, setUser }= useContext(UserContext)

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  function onSubmitNewUser(data) {
    knownUsersArray.some((testuser) => testuser.username === data.username)
      ? (console.log("clash"), (message = "username taken, try again"))
      : (console.log("clear"),
        knownUsersArray.push(data),
        setUser(data),
        (message = "done!"));

    console.log("data is", data);
    console.log("data.username is", data.username);
    console.log("knownUsersArray is ->", knownUsersArray);
    //console.log("user is", user);
    //console.log("user.username is", user.username);
  }

  // const users = [
  //   { id: 1, name: "Alice" },
  //   { id: 2, name: "Bob" },
  //   { id: 3, name: "John" },
  //   { id: 4, name: "Jane" },
  // ];
  // users.some((user) => user.name === "Johnny") ? console.log('yes'):console.log('no')

  // TO BE SENT TO/FROM BACKEND
  //if(knownUsersArray.filter((usercheck) => usercheck.username === data.username)) then {console.log("no way")}else{{console.log("that OK")}}
  //else{knownUsersArray.push(user)}}
  // {knownUsersArray.push(data)}

  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <>
      <UserContext.Provider value={user}>
        <PaperProvider theme={theme}>
          <Portal>
            {!visible ? (
              <Image
                style={styles.Image}
                source={require("../assets/travel-chum-logo.png")}
              />
            ) : null}

            <Dialog visible={visible}>
              <Dialog.Title style={{ fontSize: 20 }}>
                Enter your new username and password into the boxes below.
              </Dialog.Title>
              <Dialog.Title style={{ fontSize: 20 }}>
                If the username is available a new account will be created.
              </Dialog.Title>

              <Dialog.Actions>
                <Button
                  icon="delete"
                  mode="contained-tonal"
                  onPress={() => {
                    setVisible(false);
                  }}
                >
                  Close information dialog
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </PaperProvider>

        <Button icon="information-outline" mode="contained" onPress={showModal}>
          More information
        </Button>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Enter New Username"
              placeholder="type here"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
        />
        {errors.username && (
          <Text style={{ color: "black" }}>
            A username is required.{" "}
            <Text style={{ color: "white" }}>A username is required.</Text>
          </Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Enter your password"
              placeholder="type your password here"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text style={{ color: "black" }}>
            A password is required.{" "}
            <Text style={{ color: "white" }}>A password is required.</Text>
          </Text>
        )}

        <></>
        <Button
          icon="account-plus"
          mode="contained"
          onPress={handleSubmit(onSubmitNewUser)}
        >
          Create new user and login
        </Button>

        <Button
          icon="delete"
          mode="contained-tonal"
          onPress={() => {
            reset({
              username: "",
              password: "",
              // reminder: ""
            });
            setVisible(false);
          }}
        >
          Clear all fields
        </Button>
      </UserContext.Provider>
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
