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
import { RadioButton } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { UserContext } from "../UserContext";

let knownUsersArray = [{"password": "Password(1)", "username": "Guest"}]
let newUserFlag = false

export default function UserNotesForm(theme, user, setUser, note, setNote) {
  
  // move this state to user, pass setNote on props?
  // const user= useContext(UserContext)
 
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      notetitle: "",
      note: "",
      // reminder:"",
      
    },
  });
  function onSubmit(data) {
    // console.log('data is', data, 'JSON.stringify(data) gives;', JSON.stringify(data))
    console.log("data is", data);
    // console.log('flag', newUserFlag)
    setNote(data);
    // 
    // console.log("User is", User);
    console.log("user is", user);
    console.log("data.username is", data.username);
    console.log("knownUsersArray is ->", knownUsersArray)
  }
  
  
  
    // TO BE SENT TO/FROM BACKEND
    

  const [visibleinfo, setVisibleinfo] = useState(false);
  const showModal = () => setVisibleinfo(true);
  const hideModal = () => setVisibleinfo(false);

  return (
    <>
    <UserContext.Provider value={user}>
      <PaperProvider theme={theme}>
        <Portal>
          {!visibleinfo ? (
            <Image
              style={styles.Image}
              source={require("../assets/travel-chum-logo.png")}
            />
          ) : null}

          <Dialog visible={visibleinfo}>
            <Dialog.Title style={{ fontSize: 20 }}>Here you can also save, rank or comment on your favourites, or save notes on your notepad.</Dialog.Title>
            {/* <Dialog.Title style={{ fontSize: 20 }}>You can also save, rank or comment on your favourites, or save notes on your notepad</Dialog.Title> */}
           

            <Dialog.Actions>
              
            
              <Button
                icon="delete"
                mode="contained-tonal"
                onPress={() => {
                  setVisibleinfo(false);
                }}
              >
                Close information
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
            label="Enter title for your note"
            placeholder="type here"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            
          />
        )}
        name="notetitle"
      />
      {errors.commenttitle && (
        <Text style={{ color: "black" }}>
          A title is required.{" "}
          <Text style={{ color: "white" }}>A title is required.</Text>
        </Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Enter your note"
            placeholder="type your note here"
            onBlur={onBlur}
            onChangeText={onChange}            
            value={value}
          />
        )}
        name="note"
      />
      {errors.note && (
        <Text style={{ color: "black" }}>
          A note is required.{" "}
          <Text style={{ color: "white" }}>A note is required.</Text>
        </Text>
      )}
      
      
      <></>
     
      <Button
        icon="note-check-outline"
        mode="contained"
        onPress={handleSubmit(onSubmit)}
      >
        Save the note
      </Button>

      <Button
        icon="delete"
        mode="contained-tonal"
        onPress={() => {
          reset({ notetitle: "", note: "", 
          // reminder: "" 
        });
      }}
      >
        clear fields
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

