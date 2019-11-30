
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,Text,
  View,Button,
  StatusBar, Image
} from 'react-native'

import logo from './images/splashimage.png'



function Home(props) {


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
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#e3e3e3"
      />




    
      
      
        <Button style={styles.buttons} title="Log your mood" onPress={() => props.navigation.navigate('dashboard')}>Log your Mood</Button>

        <Button style={styles.buttons} title="Diary" onPress={() => props.navigation.navigate('diary')}>Personal</Button>
        
        <Button style={styles.buttons} title="Help" onPress={() => props.navigation.navigate('dashboard')}>Seek Help</Button>
</View>
       
        
       



  )
}

export default Home






