
import React from 'react';
import {View,Button} from 'react-native'
import Home from './Home.js'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from './src/Dashboard.js';
import Diary from "./src/Diary"


const AppNavigator = createStackNavigator({
  HomeS:Home,
  diary:{
    screen:Diary,
      navigationOptions:{
      headerTitle:'Your diary'
    }
  },
  dashboard:Dashboard,
  
});

export default createAppContainer(AppNavigator);

