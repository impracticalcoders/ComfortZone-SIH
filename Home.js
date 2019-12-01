
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet, Text,
  View, Button,
  StatusBar, Image,
  TouchableOpacity
} from 'react-native'

import { Icon } from 'native-base'
import diarylogo from './images/diaryicon.jpg'
import entertainlogo from './images/movies.png'
import lifesaver from './images/lifesaver.png'
import homeicon from './images/homeicon.png'
import { TabNavigator } from 'react-navigation'
import Diary from './src/Components/Diary.js';
import Dashboard from './src/Components/Dashboard.js';
import HomeScreen from './src/Components/HomeScreen.js';
import Navbar from "./src/Components/Navbar"
import Emergency from "./src/Components/seekhelp.js"

//import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

function Home (props) {

/*navigationOptions = {
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
        height:40,backgroundColor:'white',alignItems:'center'
      },
      footer: {
        top:510,
        bottom: 0,
      },
      
    })


    return (
      <View style={styles.footer}>
      
      <View style={{top:"1300%",position:'absolute',flex: 1, flexDirection: 'row'} }> 
    <View style={{width:'25%'}}>
    <TouchableOpacity style={styles.buttons} onPress={()=>props.navigation.navigate('Home')}>
    <Image source={homeicon} style={{width:40,height : 40}}/>
        </TouchableOpacity>
    </View>

    <View style={{width:'25%'}}>
      <TouchableOpacity style={styles.buttons} onPress={()=>props.navigation.navigate('prevnotes')}>
      <Image source={diarylogo} style={{width:40,height : 40}}/>
        </TouchableOpacity>  
    </View>

    <View style={{width:'25%'}}>
    <TouchableOpacity style={styles.buttons} onPress={()=>props.navigation.navigate('diary')}>
    <Image source={entertainlogo} style={{width:40,height : 40}}/>
        </TouchableOpacity>
        
    </View>

    <View style={{width:'25%'}}>
    <TouchableOpacity style={styles.buttons} onPress={()=>props.navigation.navigate('emergency')}>
    <Image source={lifesaver} style={{width:40,height : 40}}/>
        </TouchableOpacity>
        
    </View>


    </View>
</View>


    );
  }



export default Home;






