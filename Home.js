
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet, Text,
  View, Button,
  StatusBar, Image,
  TouchableOpacity
} from 'react-native'

import { Icon } from 'native-base'
//import logo from './images/splashimage.png'
import { TabNavigator } from 'react-navigation'
import Diary from './src/Components/Diary.js';
import Dashboard from './src/Components/Dashboard.js';
import HomeScreen from './src/Components/HomeScreen.js';
import Navbar from "./src/Components/Navbar"

//import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

function Home (props) {

 /* static navigationOptions = {
    // headerLeft: <Image source={logo} style={{ width: 50, height: 50, paddingLeft: 10 }} />,
    title: 'Smile A While',
  }*/

  // constructor(props){
  //   super(props)
  // }


  // render(props) {

    
/*const TabBarComponent = props => <BottomTabBar {...props} />;

const TabScreens = createBottomTabNavigator(
  {
    DiaryTab: {
      screen: Diary
    },
    HomeTab: {
      screen: HomeScreen

    },

    MusicTab: {
      screen: Dashboard
    },

  },
  {
    tabBarComponent: props => (
      <TabBarComponent {...props} style={{ borderTopColor: '#605F60' }} />
    ),
  }
);

    /*const AppTabNavigator = TabNavigator({
      DiaryTab: {
        screen: Diary
      },
      HomeTab: {
        screen: HomeScreen

      },

      MusicTab: {
        screen: Dashboard
      },


    }, {
      animationEnabled: true,
      swipeEnabled: true,
      tabBarPosition: 'bottom',
      tabBarOptions: {
        style: {
          ...Platform.select({
            android: {
              backgroundColor: 'white'
            }
          })
        }
      }


    }




    )*/

    const styles = StyleSheet.create({
      container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      parent: {
        height: "100%",
        marginTop: 20,
        alignItems: 'center'
      },
      title: {
        fontSize: 30
      },
      logo: {
        width: 300,
        height: 300,
        marginTop: 30
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        marginBottom: 50,
        color: 'black',
      },
      MotivationalQuote: {
        padding: 20,
        top: 20
      },
      buttons: {
        marginVertical: 4,
        marginHorizontal: 4,
      }

    })


    return (
      <View>
      <View style={{marginBottom:20}} >
      <TouchableOpacity  onPress={()=>props.navigation.navigate('diary')}>
        <Text>Diary</Text>
        </TouchableOpacity>
      </View>

      <View style={{top:"1700%",position:'absolute',flex: 1, flexDirection: 'row'} }> 
    <View style={{width:'25%'}}>
    <TouchableOpacity style={{height:80,backgroundColor:'green'}} onPress={()=>props.navigation.navigate('Home')}>
        <Text>Home</Text>
        </TouchableOpacity>
    </View>

    <View style={{width:'25%'}}>
      <TouchableOpacity style={{height:80,backgroundColor:'blue'}} onPress={()=>props.navigation.navigate('prevnotes')}>
        <Text style={{color:'white',fontSize:20}}>Diary</Text>
        </TouchableOpacity>  
    </View>

    <View style={{width:'25%'}}>
    <TouchableOpacity style={{height:80,backgroundColor:'yellow'}} onPress={()=>props.navigation.navigate('diary')}>
        <Text>spotify</Text>
        </TouchableOpacity>
        
    </View>

    <View style={{width:'25%'}}>
    <TouchableOpacity style={{height:80,backgroundColor:'red'}} onPress={()=>props.navigation.navigate('diary')}>
        <Text>Emergency!</Text>
        </TouchableOpacity>
        
    </View>


    </View>
</View>


    );
  }



export default Home;






