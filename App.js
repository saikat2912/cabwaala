import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from "react-redux";
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import MapScreen from './screens/MapScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (

    <Provider store={store}>
    <NavigationContainer>
    <SafeAreaProvider>
      <Stack.Navigator>
        <Stack.Screen component={HomeScreen} name="HomeScreen" option={{headerShown:false}}/>
        <Stack.Screen component={MapScreen} name="MapScreen" option={{headerShown:false}}/>

      </Stack.Navigator>
    
    </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
