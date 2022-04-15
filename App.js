import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigatio from './src/navigation/Navigatio';
import { StyleSheet, FlatList,ActivityIndicator,Platform} from 'react-native'
export default function App() {
  console.log("Este es un ejemplo");
  return (
    <NavigationContainer>
      <Navigatio/>
    </NavigationContainer>    
  );
}
