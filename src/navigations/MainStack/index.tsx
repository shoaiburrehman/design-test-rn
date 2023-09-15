import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationRoutes from '../NavigationRoutes';
import HomeScreen from '../../screens/HomeScreen';
import BottomTabNavigator from '../BottomTabNavigator';
import BackgroundImageScreen from '../../screens/BackgroundImageScreen';

const RootStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName={NavigationRoutes.BOTTOMSTACK}
      screenOptions={{headerShown: false}}>
      <RootStack.Screen
        name={NavigationRoutes.HOME}
        component={BackgroundImageScreen}
        // options={navigationOptions}
      />

      {/* <RootStack.Screen
        name={NavigationRoutes.BOTTOMSTACK}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      /> */}
    </RootStack.Navigator>
  );
};

export default MainNavigator;
