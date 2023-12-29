import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';

export default () => {
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      UserName: '',
      password: ''
    }
  });
  const onSubmit = data => {
    console.log(data);
  };

  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  console.log('errors', errors);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>User Name</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
          label="please enter UserName."
        placeholder="type a UserName here"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="UserName"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Password; 8 characters including one uppercase, lowercase, number and symbol</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
          label="please enter Password."
        placeholder="type your password here"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="password"
        rules={{ pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, required: true }}
      />
 <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="clear fields"
          onPress={() => {
            reset({
              UserName: '',
              password: ''
            })
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Reset to Guest"
          onPress={() => {
            reset({
              UserName: 'Guest',
              password: 'Password(1)'
            })
          }}
        />
      </View>

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Create User Account"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
   
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
   
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    
  },
  input: {   
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
