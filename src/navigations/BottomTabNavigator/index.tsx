import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabIcons} from '../../assets';
import {Image, View} from 'react-native';
import {vh} from '../../themes/units';
import NavigationRoutes from '../NavigationRoutes';
import {Colors} from '../../themes/Colors';
import HomeNavigator from '../HomeStack';
import styles from '../styles';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = (props: any) => {
  return (
    <Tab.Navigator
      initialRouteName={NavigationRoutes.HOMESTACK}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopWidth: 0,
          backgroundColor: Colors.BLACK,
          height: vh * 11,
          margin: vh * 2,
          borderRadius: vh * 3,
        },
      }}>
      <Tab.Screen
        name={NavigationRoutes.HOMESTACK}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={focused ? tabIcons.homeActive : tabIcons.homeInactive}
                style={styles.bottomTabIcon}
              />
              {focused && <View style={styles.bottomTabCircle} />}
            </>
          ),
        }}
      />
      <Tab.Screen
        name={NavigationRoutes.SEARCHSTACK}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={
                  focused ? tabIcons.searchInactive : tabIcons.searchInactive
                }
                style={[
                  styles.bottomTabIcon,
                  focused && {tintColor: Colors.TAB_COLOR},
                ]}
              />
              {focused && <View style={styles.bottomTabCircle} />}
            </>
          ),
        }}
      />
      <Tab.Screen
        name={NavigationRoutes.FOLDERSTACK}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={
                  focused ? tabIcons.folderInactive : tabIcons.folderInactive
                }
                style={[
                  styles.bottomTabIcon,
                  focused && {tintColor: Colors.TAB_COLOR},
                ]}
              />
              {focused && <View style={styles.bottomTabCircle} />}
            </>
          ),
        }}
      />
      <Tab.Screen
        name={NavigationRoutes.PROFILESTACK}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={
                  focused ? tabIcons.profileActive : tabIcons.profileInactive
                }
                style={styles.bottomTabIcon}
              />
              {focused && <View style={styles.bottomTabCircle} />}
            </>
          ),
        }}
      />
      <Tab.Screen
        name={NavigationRoutes.SETTINGSTACK}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={
                  focused ? tabIcons.settingInactive : tabIcons.settingInactive
                }
                style={[
                  styles.bottomTabIcon,
                  focused && {tintColor: Colors.TAB_COLOR},
                ]}
              />
              {focused && <View style={styles.bottomTabCircle} />}
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
