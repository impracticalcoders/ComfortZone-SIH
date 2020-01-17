import React from 'react';
import {View, Button, StyleSheet, Image, Text} from 'react-native';
import Home from './Home.js';
import Youtube from "./src/Components/YoutubeAPI/YoutubePage"
import Angry from './src/moods/Angry';
import Bored from './src/moods/Bored';
import Excited from './src/moods/Excited';
import Fear from './src/moods/Fear';
import Happy from './src/moods/Happy';
import Sad from './src/moods/Sad';
import PastNotes from './src/PastNotes';
import HomeScreen from './src/Components/HomeScreen.js';
import logo from './images/splashimage.png';
import gluck from './images/gluck.png';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Diary from './src/Components/Diary.js';
import Dashboard from './src/Components/Dashboard.js';
import Navbar from './src/Components/Navbar';
import Prevnotes from './src/Components/Prevnotes';
import Emergency from './src/Components/seekhelp.js';
import Metime from './src/Components/Metime';
import Media from './src/Components/Media';
import Addfeeditem from './src/Components/Feed/AddfeedItem';
import Login from './Login.js';
import Signup from './Signup.js';

// import Save from '.src/Components/Diary'

/*export default class App extends React.Component{
  render(){
    return(<AppTabNavigator/>);
  }
  
  
  }*/

const AppNavigator = createStackNavigator({
  Login: Login,
  Home: {
    screen: Home,
    navigationOptions: {
      headerLeft: <Image source={logo} style={{width: 50, height: 50}} />,
      headerBackground: (
        <Image
          source={gluck}
          style={{marginRight: 100, width: '100%', height: 50}}
        />
      ),
      headerStyle: {
        backgroundColor: '#e3e3e3',
      },
    },
  },
  Youtube:Youtube,
  diary: {
    screen: Diary,
    //  navigationOptions:{
    //   headerRight:
    //  },
  },
  Signup: Signup,
  dashboard: Dashboard,
  emergency: Emergency,
  Happy: Happy,
  Bored: Bored,
  addfeeditem: Addfeeditem,
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
