
import React from 'react';
import {View,Button} from 'react-native'
import Home from './Home.js'
import Home2 from './Home2.js'
import MC from './MC'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from './src/Dashboard.js';

const App= ()=>{
  
  return(
    <View >   
     <Button title="HOme" onPress={()=>{

     }} />
    </View> 
  
  )
}

const AppNavigator = createStackNavigator({
  HomeS:Home,
  Home2S:Home2,
  SignIn:MC,
  dashboard:Dashboard
});

export default createAppContainer(AppNavigator);

