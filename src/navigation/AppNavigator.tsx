import React, { useState } from "react";
import { SCREENS } from "../constants";
import Home from "../screens/HomeScreen/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationScreen from "../screens/HomeScreen/NavigationScreen";
import Profile from "../screens/HomeScreen/Profile";
import BusDetails from "../screens/HomeScreen/BookBus/BusDetails";
import Login from "../screens/AuthScreen/Login";
import Terms from "../screens/HomeScreen/DrawerScreen/Terms";
import Privacy from "../screens/HomeScreen/DrawerScreen/Privacy";
import ContactUs from "../screens/HomeScreen/DrawerScreen/ContactUs";
import About from "../screens/HomeScreen/DrawerScreen/About";
import NavigationDriverScreen from "../screens/HomeScreen/NavigationDriverScreen";
import Passengers from "../screens/HomeScreen/Passengers";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerShown: false,
  animation: "fade",
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name={SCREENS.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREENS.HOME} component={Home} />
      <Stack.Screen name={SCREENS.PASSENGER} component={Passengers} />
      <Stack.Screen name={SCREENS.BUS_DETAIL} component={BusDetails} />
      <Stack.Screen name={SCREENS.NAV_DRAVER_SCREEN} component={NavigationDriverScreen} />
      <Stack.Screen name={SCREENS.NAV_SCREEN} component={NavigationScreen} />
      <Stack.Screen name={SCREENS.PROFILE} component={Profile} />
      <Stack.Screen name={SCREENS.PRIVACY} component={Privacy} />
      <Stack.Screen name={SCREENS.TERMS} component={Terms} />
      <Stack.Screen name={SCREENS.ABOUT} component={About} />
      <Stack.Screen name={SCREENS.CONTACT_US} component={ContactUs} />

    </Stack.Navigator>
  )
}

export { AppNavigator, AuthStackNavigator };




