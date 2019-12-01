
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet, Text,
  View, Button,
  StatusBar, Image
} from 'react-native'

import { Icon } from 'native-base'
//import logo from './images/splashimage.png'
import { TabNavigator } from 'react-navigation'
import Diary from './src/Components/Diary.js';
import Dashboard from './src/Components/Dashboard.js';
import HomeScreen from './src/Components/HomeScreen.js';

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
        flex: 1,
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

<Button title="click" onPress={()=>props.navigation.navigate('dashboard')}>Hello another world</Button>
<Button title="click" onPress={()=>props.navigation.navigate('diary')}>Hello another world</Button>

</View>



    );
  }



export default Home;






