import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function MyHeaderComponent () {
    return (
    <Appbar>
       <Appbar.Content title="Title"  />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Switch
          color={'red'}
          value={isThemeDark}
          onValueChange={toggleTheme}
        />
    </Appbar>
)};

