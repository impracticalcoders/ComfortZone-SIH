import React from 'react';
import {View, Button, StyleSheet, Image, Text} from 'react-native';
import Home from './Home.js';
import Angry from './src/moods/Angry';
import Bored from './src/moods/Bored';
import Excited from './src/moods/Excited';
import Fear from './src/moods/Fear';
import Happy from './src/moods/Happy';
import Sad from './src/moods/Sad';
import PastNotes from './src/PastNotes';
import HomeScreen from './src/Components/HomeScreen.js';
import logo from './images/splashimage.png';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Diary from './src/Components/Diary.js';
import Dashboard from './src/Components/Dashboard.js';
import Navbar from './src/Components/Navbar';
import Prevnotes from './src/Components/Prevnotes';
import Emergency from './src/Components/seekhelp.js';
import Metime from './src/Components/Metime';
import Media from './src/Components/Media';
// import Save from '.src/Components/Diary'

/*export default class App extends React.Component{
  render(){
    return(<AppTabNavigator/>);
  }
  
  
  }*/

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Glück',
      headerLeft: <Image source={logo} style={{width: 50, height: 50}} />,
      headerStyle: {
        backgroundColor: '#e3e3e3',
      },
    },
  },
  diary: {
    screen: Diary,
    //  navigationOptions:{
    //   headerRight:
    //  },
  },
  dashboard: Dashboard,
  emergency: Emergency,
  Happy: Happy,
  Bored: Bored,
  Sad: Sad,
  Fear: Fear,
  Angry: Angry,
  metime: Metime,
  Excited: Excited,
  HomeS: Home,
  prevnotes: Prevnotes,
  pastnotes: PastNotes,
  media: Media,
  navbar: Navbar,
  headerMode: 'none',
});
export default createAppContainer(AppNavigator);
