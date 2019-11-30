
import React from 'react';
import {View,Button} from 'react-native'
import Home from './Home.js'
import logo from './images/splashimage.jpg'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from './src/Dashboard.js';
import Diary from "./src/Diary"
import Angry  from "./src/moods/Angry"
import Bored  from "./src/moods/Bored"
import Excited  from "./src/moods/Excited"
import Fear  from "./src/moods/Fear"
import Happy  from "./src/moods/Happy"
import Sad  from "./src/moods/Sad"

import {Image} from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';
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
  Happy:Happy,
  Bored:Bored,
  Sad:Sad,
  Fear:Fear,
  Angry:Angry,
  Excited:Excited,
  HomeS:Home,
  headerMode:'none',

});

export default createAppContainer(AppNavigator);

