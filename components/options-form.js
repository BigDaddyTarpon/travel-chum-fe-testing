import { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import { RadioButton, List } from "react-native-paper";

export default function OptionsForm() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [checked, setChecked] = useState("car");
  const [expanded, setExpanded] = useState(false);
  const handlePress = () => setExpanded(!expanded);
  return (
    <>
      <TextInput
        label="please enter a postcode for the start"
        placeholder="type here"
        value={origin}
        onChangeText={(origin) => setOrigin(origin)}
      />
      <TextInput
        label="please enter a postcode for the destination"
        placeholder="type here"
        value={destination}
        onChangeText={(destination) => setDestination(destination)}
      />
      <List.Accordion
        title="Click to open/close to select. Selected;"
        right={(props) => <List.Icon {...props} icon={checked} />}
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
      </List.Accordion>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
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

{
  /* 
<List.Accordion
        title="please choose one mode of transport"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
         <List.Item title="car"  /> 
        <List.Item title="train" />
      </List.Accordion> 
      
  */
}
