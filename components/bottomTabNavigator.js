import * as React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {HomeStack} from './HomeStack';
import {ReportStack} from './reportStack';
import Settings from '../screens/Settings';
import {
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
} from '@expo/vector-icons';

export const AppTabNavigator = createBottomTabNavigator({

  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Ionicons name="home" size={30} color={tintColor}></Ionicons>
        </View>
      ),
      tabBarOptions: { activeTintColor: 'rgb(59, 157, 206)', inactiveTintColor: 'gray' },
      tabBarLabel: 'Dashboard',
    },
  },
    Report: {
    screen: ReportStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Image source={require("../assets/report.png")}
          style={{width:30, height:30, }}/>
        </View>
       ),
      tabBarOptions: { activeTintColor: 'rgb(59, 157, 206)', inactiveTintColor: 'gray' },
      tabBarLabel: 'Add A Report',
    },
  },

  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Feather name="user" size={30} color={tintColor}/>
        </View>
      ),
      tabBarOptions: { activeTintColor: 'rgb(59, 157, 206)', inactiveTintColor: 'gray' },
      tabBarLabel: 'Settings',
    },
  },
  
});
