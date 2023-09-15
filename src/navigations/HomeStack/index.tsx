import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationRoutes from '../NavigationRoutes';
import HomeScreen from '../../screens/HomeScreen';
import navigationOptions from '../NavigationOptions';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName={NavigationRoutes.HOME}>
      <HomeStack.Screen
        name={NavigationRoutes.HOME}
        component={BackgroundImageScreen}
        options={navigationOptions}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
