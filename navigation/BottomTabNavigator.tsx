import {AntDesign, Ionicons, MaterialIcons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Index from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, HomeParamList, TabTwoParamList } from '../types';
import MovieDetailsScreen from "../screens/MovieDetailsScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
        <BottomTab.Navigator
          initialRouteName="Home"
          tabBarOptions={{ activeTintColor: '#fff',
              inactiveTintColor: '#cbcbcb',
              activeBackgroundColor: 'black',
              inactiveBackgroundColor: 'black',
              style: {
                  backgroundColor: 'black',
              } }}>
          <BottomTab.Screen
            name="Home"
            component={TabOneNavigator}
            options={{
              tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
            }}
          />
          <BottomTab.Screen
            name="Coming Soon"
            component={TabTwoNavigator}
            options={{
              tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={24} color={color} />,
            }}
          />

        <BottomTab.Screen
            name="Search"
            component={TabTwoNavigator}
            options={{
                tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />,
            }}
        />
        <BottomTab.Screen
            name="Downloads"
            component={TabTwoNavigator}
            options={{
                tabBarIcon: ({ color }) => <AntDesign name="download" size={24} color={color} />,
            }}
        />
    </BottomTab.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeParamList>();

function TabOneNavigator() {
  return (
    <HomeStack.Navigator>

        <HomeStack.Screen
            name="HomeScreen"
            component={Index}
            options={{ headerShown: false }}
        />
      <HomeStack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={{ title: '' }}
      />
    </HomeStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}
