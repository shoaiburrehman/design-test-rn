import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationRoutes from '../NavigationRoutes';
import HomeScreen from '../../screens/HomeScreen';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={NavigationRoutes.HOME}>
      <HomeStack.Screen
        name={NavigationRoutes.HOME}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
