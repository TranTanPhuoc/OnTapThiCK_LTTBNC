import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Screen/Screen1';
import Screen2 from './Screen/Screen2';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName={'Screen2'} screenOptions={{headerShown:false}}>
              <Stack.Screen name='Screen1' component={Screen1}/>
              <Stack.Screen name='Screen2' component={Screen2}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}
