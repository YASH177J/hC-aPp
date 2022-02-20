import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import AddReportScreen from '../screens/addReportScreen';
import ViewReports from '../screens/viewReportScreen';

export const ReportStack = createStackNavigator(
  {
     AddReportScreen: {
      screen: AddReportScreen,
      navigationOptions: { headerShown: false },
    },
     ViewReportScreen: {
      screen: ViewReports,
      navigationOptions: { headerShown: false },
    },
  },
  {
    initialRouteName: 'AddReportScreen',
  }
);
