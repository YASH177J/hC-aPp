import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AppTabNavigator } from './components/bottomTabNavigator';
import SignUpScreen from './screens/signUpScreen';
import SplashScreen from './screens/splashScreen';
import LoginScreen from './screens/loginScreen';
import db from "./config"

export default function App() {
  return <AppContainer />;
}

const switchNavigator = createSwitchNavigator({
  Splash: { screen: SplashScreen },
  Login: { screen: LoginScreen },
  Signup: { screen: SignUpScreen },
  Tabs: {screen: AppTabNavigator}
});

const AppContainer = createAppContainer(switchNavigator);
