import React, { useState } from "react";
import { SCREENS } from "../constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationScreen from "../screens/HomeScreen/NavigationScreen";
import Notification from "../screens/HomeScreen/Notification";
import Profile from "../screens/HomeScreen/Profile";
import Login from "../screens/AuthScreen/Login";
import Setting from "../screens/HomeScreen/DrawerScreen/Setting";
import Terms from "../screens/HomeScreen/DrawerScreen/Terms";
import Privacy from "../screens/HomeScreen/DrawerScreen/Privacy";
import ContactUs from "../screens/HomeScreen/DrawerScreen/ContactUs";
import About from "../screens/HomeScreen/DrawerScreen/About";
import EditProfile from "../screens/HomeScreen/EditProfile";
import ChangePassword from "../screens/HomeScreen/ChangePassword";
import Home from "../screens/HomeScreen/Home";

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
      <Stack.Screen name={SCREENS.NAV_SCREEN} component={NavigationScreen} />
      <Stack.Screen name={SCREENS.NOTIFICATION} component={Notification} />
      <Stack.Screen name={SCREENS.PROFILE} component={Profile} />

      <Stack.Screen name={SCREENS.SETTING} component={Setting} />
      <Stack.Screen name={SCREENS.PRIVACY} component={Privacy} />
      <Stack.Screen name={SCREENS.TERMS} component={Terms} />
      <Stack.Screen name={SCREENS.ABOUT} component={About} />

      <Stack.Screen name={SCREENS.CONTACT_US} component={ContactUs} />
      <Stack.Screen name={SCREENS.EDIT_PROFILE} component={EditProfile} />
      <Stack.Screen name={SCREENS.CHANGE_PASSWORD} component={ChangePassword} />

    </Stack.Navigator>
  )
}

export { AppNavigator, AuthStackNavigator };




