import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationRoutes from '../NavigationRoutes';
import HomeScreen from '../../screens/HomeScreen';

const RootStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName={NavigationRoutes.HOME}>
      <RootStack.Screen
        name={NavigationRoutes.HOME}
        component={HomeScreen}
        options={{headerShown: false}}
      />      
    </RootStack.Navigator>
  );
};

export default MainNavigator;
