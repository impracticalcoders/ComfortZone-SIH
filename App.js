
import React from 'react';
import {View,Button} from 'react-native'
import Home from './Home.js'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from './src/Dashboard.js';


const AppNavigator = createStackNavigator({
  HomeS:Home,
  dashboard:Dashboard
});

export default createAppContainer(AppNavigator);

