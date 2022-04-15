import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigatio from './src/navigation/Navigatio';

export default function App() {
  return (
    <NavigationContainer>
      <Navigatio/>
    </NavigationContainer>    
  );
}
