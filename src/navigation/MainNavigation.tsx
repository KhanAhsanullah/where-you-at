import React, { useEffect, useState } from 'react';
import { navigationRef } from './RootNavigation';
import {  useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../containers/Splash';
import { AuthStackNavigator } from './AppNavigator';
import DrawerSCreenNavigator from './AuthStackNavigator';

const MainNavigation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isLoggedIn } = useSelector((state) => state?.user);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Splash />
  ) : (
    <NavigationContainer ref={navigationRef}>
      {!isLoggedIn ? <DrawerSCreenNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigation;

