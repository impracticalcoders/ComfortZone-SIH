
import React from 'react';
import {View,Button} from 'react-native'
import Home from './Home.js'
import logo from './images/splashimage.jpg'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from './src/Dashboard.js';
import Diary from "./src/Diary"

import {Image} from 'react-native'
const AppNavigator = createStackNavigator({
  splashscreen:{
    screen:Home,
    navigationOptions: {
      title: 'Home',
      headerLeft: <Image source ={logo} style={{width: 50, height: 50}} /> ,
      headerStyle: {
        backgroundColor: '#e3e3e3',
      },
      headerTintColor: '#606070',
    }

  },
  diary:{
    screen:Diary,
      navigationOptions:{
      headerTitle:'Your diary'
    }

  },
  
  dashboard:Dashboard,
  HomeS:Home,
  headerMode:'none',
});

export default createAppContainer(AppNavigator);

