
import React from 'react';
import {View,Button,StyleSheet,Image} from 'react-native'
import Home from './Home.js'
import Angry  from "./src/moods/Angry"
import Bored  from "./src/moods/Bored"
import Excited  from "./src/moods/Excited"
import Fear  from "./src/moods/Fear"
import Happy  from "./src/moods/Happy"
import Sad  from "./src/moods/Sad"
import PastNotes  from "./src/PastNotes"
import HomeScreen from './src/Components/HomeScreen.js'
import logo from './images/splashimage.png'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Diary from './src/Components/Diary.js';
import Dashboard from './src/Components/Dashboard.js';
import Navbar from "./src/Components/Navbar"
// import Save from '.src/Components/Diary'


/*export default class App extends React.Component{
  render(){
    return(<AppTabNavigator/>);
  }
  
  
  }*/
 
const AppNavigator = createStackNavigator({
  
  Home:{
    screen:Home,
    navigationOptions:{
      title:'SmileAWhile',
      headerLeft:<Image source={logo} style={{width:50,height : 50}}/>,
      headerStyle:{
        backgroundColor:'#e3e3e3',
      }
    }

  },
  diary:{
    screen: Diary,
    // navigationOptions:{
    //   headerRight:<Save/>
    // },
  },
  dashboard:Dashboard,
  Happy:Happy,
  Bored:Bored,
  Sad:Sad,
  Fear:Fear,
  Angry:Angry,
  Excited:Excited,
  HomeS:Home,
  pastnotes:PastNotes,
  navbar:Navbar,
  headerMode:'none',
  
})
export default createAppContainer(AppNavigator);



