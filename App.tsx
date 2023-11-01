import 'react-native-gesture-handler';
import React from 'react';
// import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationsScreens } from './src/navigations/NavigationScreens';

 const App = () => {

  return (
    <NavigationContainer>
      <NavigationsScreens/>
    </NavigationContainer>
  )
}

export default App;
