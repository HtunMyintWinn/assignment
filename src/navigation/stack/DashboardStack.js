import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Pages
import DashboardScreen from '@pages/Dashboard/Dashboard';

const Stack = createNativeStackNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export default DashboardStack;
