import React from 'react';
import {Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../../features/screens/auth/LoginScreen'
import SignupScreen from '../../features/screens/auth/SignupScreen'
import HomeScreen from '../../features/screens/home/HomeScreen';

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack

  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none',
  },
);
export default createAppContainer(AppNavigator);
