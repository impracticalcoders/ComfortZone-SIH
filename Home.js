
import React, { Component } from 'react';
import {ScrollView,
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
import logo from './images/silhouette47.jpg'



function Home (props) {


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
        height:400,width:400,opacity:0.5
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
        top:110,
        bottom: 0,
      },
      
    })


    return (
      <View>
          
          <Image source ={logo } style={styles.logo}/>
         
     


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
    <Image source={lifesaver} style={{width:35,height : 35}}/>
        </TouchableOpacity>
        
    </View>


    </View>
</View>
</View>

    );
  }



export default Home;






