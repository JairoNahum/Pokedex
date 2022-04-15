import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigatio from './src/navigation/Navigatio';
import { StyleSheet, FlatList,ActivityIndicator,Platform} from 'react-native'
export default function App() {
  return (
    <NavigationContainer>
      <Navigatio/>
    </NavigationContainer>    
  );
}
