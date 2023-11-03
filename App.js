import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from './src/Screen/Splash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LetsPlay from './src/Screen/LetsPlay';
import Age from './src/Screen/Age';
import Age2 from './src/Screen/Age2';
import PlayerAdd from './src/Screen/PlayerAdd';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="LetsPlay" component={LetsPlay} />
          <Stack.Screen name="Age" component={Age} />
          <Stack.Screen name="Age2" component={Age2} />
          <Stack.Screen name="PlayerAdd" component={PlayerAdd} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
