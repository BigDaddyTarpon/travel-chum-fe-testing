import { useState } from "react";

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

export default function UserForm(theme) {
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
  function onSubmit(data) {
    // console.log('data is', data, 'JSON.stringify(data) gives;', JSON.stringify(data))
    console.log("data is", data);
    // console.log('error is', error? error : null)
  }
  //data should be origin, destination and number of stops

  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <>
      <PaperProvider theme={theme} >
        <Portal >
          
          {!visible ? (
            <Image
              style={styles.Image}
              source={require("../assets/travel-chum-logo.png")}
            />
          ) : null}
          
          <Dialog visible={visible}>
            <Dialog.Title>Enter your password and username below.</Dialog.Title>
            {/* <Dialog.Title> 2. Enter your new password in the password box below.</Dialog.Title> */}

            <Dialog.Actions>
              <Button
              
                icon="account-check"
                mode="contained"
                onPress={handleSubmit(onSubmit)}
              >
                Then click here to create a new account
              </Button>
            </Dialog.Actions>
            <Dialog.Actions>
              <Button
                icon="delete"
                mode="contained-tonal"
                onPress={() => {
                  setVisible(false);
                }}
              >
                Or cancel and close new user dialogue
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </PaperProvider>

      <Button icon="account-plus" mode="contained" onPress={showModal}>
        Click to create new user, or log in below
      </Button>

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Enter Username"
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

      {/* <>
    {formState.errors.password?.message && (
      <FormError errorMessage={formState.errors.password?.message} />
      </> */}

      {/* <Controller
        control={control}
        rules={{
          required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="optional password reminder."
            placeholder="type a hint here"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="reminder"
      />
      {errors.reminder && (
        <Text style={{ color: "black" }}>
          A reminder isn't required.{" "}
          <Text style={{ color: "white" }}>A reminder isn't required.</Text>
        </Text>
      )} */}

      <></>
      <Button
        icon="account-tie"
        mode="contained-tonal"
        onPress={() => {
          reset({ username: "Guest", password: "Password(1)", reminder: "" });
        }}
      >
        Click to fill in details as Guest Account
      </Button>
      <Button
        icon="account-check"
        mode="contained"
        onPress={handleSubmit(onSubmit)}
      >
        Login with the details provided
      </Button>

      <Button
        icon="delete"
        mode="contained-tonal"
        onPress={() => {
          reset({ username: "", password: "", reminder: "" });
          setVisible(false);
        }}
      >
        clear fields and close new user dialogue
      </Button>
    </>
  );

  {
    /* // import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
// import { useForm, Controller } from 'react-hook-form';
// import Constants from 'expo-constants';

// export default () => {
//   const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
//     defaultValues: {
//       UserName: '',
//       password: ''
//     }
//   });
//   const onSubmit = data => {
//     console.log('data', data);
//   };

//   const onChange = arg => {
//     return {
//       value: arg.nativeEvent.text,
//     };
//   };

//   //console.log('errors at22', errors);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>User Name</Text>
//       <Controller
//         control={control}
//         render={({field: { onChange, onBlur, value }}) => (
//           <TextInput
//           label="please enter UserName."
//         placeholder="type a UserName here"
//             style={styles.input}
//             onBlur={onBlur}
//             onChangeText={value => onChange(value)}
//             value={value}
//           />
//         )}
//         name="UserName"
//         rules={{ required: true }}
//       />
//       <Text style={styles.label}>Password; 8 characters including one uppercase, lowercase, number and symbol</Text>
//       <Controller
//         control={control}
//         render={({field: { onChange, onBlur, value }}) => (
//           <TextInput
//           label="please enter Password."
//         placeholder="type your password here"
//             style={styles.input}
//             onBlur={onBlur}
//             onChangeText={value => onChange(value)}
//             value={value}
//           />
//         )}
//         name="password"
//         rules={{ pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, required: true }}
//       />
//  <View style={styles.button}>
//         <Button
//           style={styles.buttonInner}
//           color
//           title="clear fields"
//           onPress={() => {
//             reset({
//               UserName: '',
//               password: ''
//             })
//           }}
//         />
//       </View>
//       <View style={styles.button}>
//         <Button
//           style={styles.buttonInner}
//           color
//           title="Reset to Guest"
//           onPress={() => {
//             reset({
//               UserName: 'Guest',
//               password: 'Password(1)'
//             })
//           }}
//         />
//       </View>

//       <View style={styles.button}>
//         <Button
//           style={styles.buttonInner}
//           color
//           title="Create User Account"
//           onPress={handleSubmit(onSubmit)}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   label: {
   
//     margin: 20,
//     marginLeft: 0,
//   },
//   button: {
//     marginTop: 40,
   
//     height: 40,
//     backgroundColor: '#ec5990',
//     borderRadius: 4,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     padding: 8,
    
//   },
//   input: {   
//     height: 40,
//     padding: 10,
//     borderRadius: 4,
//   },
        // }); */
  }
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

{
  /* <Modal visible={visible} transparent={true} theme={theme}>
            <View >
            <Text>1. Enter your new username in the username box below.</Text>
            <Text>2. Enter your new password in the password box below. </Text>
            <Text>3. Optionally add a new password reminder in the password reminder box. </Text>
            <Text>4. Click the 'create new account' Button. </Text>
            <Text>4. This will close this dialogue, save your new account details and log you into your new account. </Text>
      
            </View>
          </Modal> */
}
