import { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { TextInput, List, SegmentedButtons } from "react-native-paper";
import { RadioButton } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";

export default function OptionsForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      origin: "",
      destination: "",
    },
  });
  function onSubmit (data){
   // console.log('data is', data, 'JSON.stringify(data) gives;', JSON.stringify(data))
    console.log('data is', data)
    console.log('mode of transport;', checked)
    console.log('accomodation;', valueAccomodation)
    console.log(group1)
    console.log(group2)
    console.log(group3)
    console.log(group4)
   // console.log('error is', error? error : null)
  } 
  //data should be origin, destination and number of stops

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [checked, setChecked] = useState("car");
  const [expanded, setExpanded] = useState(false);
  const [valueAccomodation, setValueAccomodation] = useState("");
  const [group1, setGroup1] = useState([]);
  const [group2, setGroup2] = useState([]);
  const [group3, setGroup3] = useState([]);
  const [group4, setGroup4] = useState([]);

  const handlePress = () => setExpanded(!expanded);

  return (
    <>
    <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        label="please enter a postcode for the start"
        placeholder="type here"
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
      />
      )}
      name="origin"
    />
    {errors.origin && <Text style={{color: 'black'}}>An origin is required. <Text style={{color: 'white'}} >An origin is required.</Text></Text>}


    <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        label="please enter a postcode for the destination"
        placeholder="type here"
        onBlur={onBlur}
            onChangeText={onChange}
            value={value}
      />
      )}
      name="destination"
    />
    {errors.destination && <Text style={{color: 'black'}}>A destination is required. <Text style={{color: 'white'}} >A destination is required.</Text></Text>}


    <Controller
        control={control}
        rules={{ 
          pattern: {value: /^[0-9]*[1-9][0-9]*$/},
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        label="please enter number of stops."
        placeholder="type a number here"
        onBlur={onBlur}
            onChangeText={onChange}
            value={value}
      />
      )}
      name="stops"
    />
    {errors.stops && <Text style={{color: 'black'}}>A number is required. <Text style={{color: 'white'}} >A number is required.</Text></Text>}


      <View>
        <List.Accordion
          title="<-Selected. Open/close options here."
          left={(props) => <List.Icon {...props} icon={checked} />}
          expanded={expanded}
          onPress={handlePress}
        >
          <List.Item
            title="car"
            onPress={() => setChecked("car")}
            left={(props) => <List.Icon {...props} icon="car" />}
          />
          <List.Item
            title="train"
            onPress={() => setChecked("train")}
            left={(props) => <List.Icon {...props} icon="train" />}
          />
          <List.Item
            title="bus/coach"
            onPress={() => setChecked("bus")}
            left={(props) => <List.Icon {...props} icon="bus" />}
          />
          <List.Item
            title="bicycle"
            onPress={() => setChecked("bicycle")}
            left={(props) => <List.Icon {...props} icon="bicycle" />}
          />
          <List.Item
            title="walk"
            onPress={() => setChecked("walk")}
            left={(props) => <List.Icon {...props} icon="walk" />}
          />
        </List.Accordion>
      </View>

      <SafeAreaView style={styles.container}>
        <SegmentedButtons
          value={valueAccomodation}
          onValueChange={setValueAccomodation}
          buttons={[
            {
              value: "",
              label: "Day trip",
              showSelectedCheck: true,
            },
            {
              value: "hotel",
              label: "Hotel",
              showSelectedCheck: true,
            },
            { value: "camping", label: "Camping", showSelectedCheck: true },
          ]}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <SegmentedButtons
          multiSelect
          value={group1}
          onValueChange={setGroup1}
          buttons={[
            {
              value: "Wheel-Chair-Access",
              label: "Easy Access",
              showSelectedCheck: true,
            },
            {
              value: "Kids Entertainment",
              label: "Kids Fun",
              showSelectedCheck: true,
            },
            { value: "shopping", label: "Shopping", showSelectedCheck: true },
          ]}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <SegmentedButtons
          multiSelect
          value={group2}
          onValueChange={setGroup2}
          buttons={[
            {
              value: "parks&nature",
              label: "Parks/Nature",
              showSelectedCheck: true,
            },
            {
              value: "hike",
              label: "Hikes/Walks",
              showSelectedCheck: true,
            },
            { value: "Wildlife", label: "Wildlife", showSelectedCheck: true },
          ]}
        />
      </SafeAreaView>

      <SafeAreaView style={styles.container}>
        <SegmentedButtons
          multiSelect
          value={group3}
          onValueChange={setGroup3}
          buttons={[
            {
              value: "Museums",
              label: "Museums",
              showSelectedCheck: true,
            },
            {
              value: "Heritage",
              label: "Heritage",
              showSelectedCheck: true,
            },
            { value: "Theatre", label: "Theatre", showSelectedCheck: true },
          ]}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <SegmentedButtons
          multiSelect
          value={group4}
          onValueChange={setGroup4}
          buttons={[
            {
              value: "Theme Parks",
              label: "Theme Parks",
              showSelectedCheck: true,
            },
            {
              value: "Sports&Leisure",
              label: "Sports/Leisure",
              showSelectedCheck: true,
            },
            { value: "Cinema", label: "Cinema", showSelectedCheck: true },
          ]}
        />
      </SafeAreaView>
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 2,
  },
});

{
  /* WORKING but tricky UI due to side scroll
  <ScrollView horizontal={true}>
      <RadioButton.Group
      label='Select One Mode (swipe sideways for more)' >

      </RadioButton.Group>
        <RadioButton.Item
          label="car"
          value="car"
          status={checked === "car" ? "checked" : "unchecked"}
          onPress={() => setChecked("car")}
        />
        <RadioButton.Item
          label="train"
          value="train"
          status={checked === "train" ? "checked" : "unchecked"}
          onPress={() => setChecked("train")}
        />
        <RadioButton.Item
          label="bus/coach"
          value="bus/coach"
          status={checked === "bus" ? "checked" : "unchecked"}
          onPress={() => setChecked("bus")}
        />

        <RadioButton.Item
          label="bicycle"
          value="bicycle"
          status={checked === "bicycle" ? "checked" : "unchecked"}
          onPress={() => setChecked("bicycle")}
        />
        <RadioButton.Item
          label="walk"
          value="walk"
          status={checked === "walk" ? "checked" : "unchecked"}
          onPress={() => setChecked("walk")}
        />
      </ScrollView>
  
  */
}



