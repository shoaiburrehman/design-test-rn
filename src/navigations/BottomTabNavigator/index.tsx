import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabIcons } from '../../assets';
import { Image } from 'react-native';
import { vh } from '../../themes/units';
import NavigationRoutes from '../NavigationRoutes';
import { Colors } from '../../themes/Colors';
import HomeNavigator from '../HomeStack';
import { Fonts } from '../../themes';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = (props: any) => {

    const tabOptions = {
        headerShown: false,
        activeTintColor: Colors.BLACK,
        tabBarHideOnKeyboard: true,
        tabBarColor: Colors.BLACK,
        style: {
            borderTopColor:  "transparent",
            shadowColor: Colors.BLACK,
            shadowOffset: {
                width: 0,
                height: 35,
            },
            shadowOpacity: 1,
            shadowRadius: 15,
            elevation: 30,
    
            height: vh * 13,
            backgroundColor: Colors.BLACK,
            paddingBottom: 6,
        },
    };
    
    return (
        <Tab.Navigator
            initialRouteName={NavigationRoutes.BOTTOMSTACK}
            screenOptions={tabOptions}
        >
        <Tab.Screen
            name={NavigationRoutes.BOTTOMSTACK}
            component={HomeNavigator}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={focused ? tabIcons.homeActive : tabIcons.homeInactive}
                        style={{width: 10,height: 10}}
                    />
                ),
            }}
        />
        <Tab.Screen
            name={NavigationRoutes.SEARCHSTACK}
            component={HomeNavigator}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={focused ? tabIcons.searchInactive : tabIcons.searchInactive}
                    />
                ),
            }}
        />
        <Tab.Screen
            name={NavigationRoutes.FOLDERSTACK}
            component={HomeNavigator}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={focused ? tabIcons.folderInactive : tabIcons.folderInactive}
                    />
                ),
            }}
        />
        <Tab.Screen
            name={NavigationRoutes.PROFILESTACK}
            component={HomeNavigator}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={focused ? tabIcons.profileActive : tabIcons.profileInactive}
                    />
                ),
            }}
        />
        <Tab.Screen
            name={NavigationRoutes.SETTINGSTACK}
            component={HomeNavigator}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={focused ? tabIcons.settingInactive : tabIcons.settingInactive}
                    />
                ),
            }}
        />
    </Tab.Navigator>
);
};
export default BottomTabNavigator;
