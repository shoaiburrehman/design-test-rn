import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationRoutes from '../NavigationRoutes';
import HomeScreen from '../../screens/HomeScreen';
import BottomTabNavigator from '../BottomTabNavigator';

const RootStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName={NavigationRoutes.BOTTOMSTACK}>
      <RootStack.Screen
        name={NavigationRoutes.BOTTOMSTACK}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default MainNavigator;
