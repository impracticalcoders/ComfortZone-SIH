
import React from 'react';
import {View,Button,StyleSheet} from 'react-native'
import Home from './Home.js'
import HomeScreen from './src/Components/HomeScreen.js'
//import logo from './images/splashimage.png'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/*export default class App extends React.Component{
  render(){
    return(<AppTabNavigator/>);
  }
  
  
  }*/
 
const AppNavigator = createStackNavigator({
  
  Main:{
    screen:Home
  }
  
  
  
})
export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },})

