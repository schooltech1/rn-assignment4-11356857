import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import LoginScreen from './components/LoginScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login">
          <Drawer.Screen name="Login" component={LoginScreen} />
          
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
