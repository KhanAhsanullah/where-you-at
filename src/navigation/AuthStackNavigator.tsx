import React from 'react';
import { SCREENS } from '../constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerScreen from './DrawerScreen';


const DrawerSCreenNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}>
      <Stack.Screen name={SCREENS.HOME} component={DrawerScreen} />    
    </Stack.Navigator>
  );
};

export default DrawerSCreenNavigator;
