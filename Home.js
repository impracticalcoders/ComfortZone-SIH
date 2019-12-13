import React, {Component} from 'react';
import {
  ScrollView,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import diarylogo from './images/diaryicon.jpg';
import lifesaver from './images/lifesaver.png';
import homeicon from './images/homeicon.png';

import logo from './images/Homescreen.jpg';
import users from './images/users.png';
import Feed from "./src/Components/Feed/Feed.js"

function Home(props) {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f7e892',
    },
    parent: {
      height: '100%',
      marginTop: 20,
      alignItems: 'center',
    },
    title: {
      fontSize: 30,
    },
    logo: {
      marginTop: 50,
      height: 400,
      width: '100%',
      opacity: 1,
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
      top: 20,
    },
    buttons: {
      marginVertical: 4,
      marginHorizontal: 4,
      height: 40,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    
    header: {
      top: 0,
      bottom: 90,
    },
  });

  return (
    <View>



    {/* Online Offline */}
      <View
        style={{
          marginTop:10,
          flex: 1,
          flexDirection: 'row',
        }}>
        <View style={{width: '50%'}}>
          <TouchableOpacity style={styles.buttons}>
            <Text style={{textAlign: 'center', fontSize: 15}}> Online</Text>
          </TouchableOpacity>
        </View>
        <View style={{width: '50%'}}>
          <TouchableOpacity style={styles.buttons}>
            <Text style={{textAlign: 'center', fontSize: 15}}> Offline</Text>
          </TouchableOpacity>
        </View>
      </View>


      {/* text box */}
      
      <View style={{marginTop:30,marginBottom:10}}>
      <TextInput multiline={true} style={{fontSize:20,borderColor:'gray',borderWidth:2,marginTop:10,marginBottom:-10,padding:10}} placeholder='enter your feelings'>hel</TextInput>  
      </View>
    



    {/* image and feed */}
    <View style={{height:500}}>
      <ScrollView >
      
      {/* <Image source={logo} style={styles.logo} /> */}

      <Feed/>
      
      </ScrollView>
    </View>




    {/* Navbar */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <View style={{width: '25%'}}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => props.navigation.navigate('media')}>
            <Image source={homeicon} style={{width: 40, height: 40}} />
          </TouchableOpacity>
        </View>
        <View style={{width: '25%'}}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => props.navigation.navigate('prevnotes')}>
            <Image source={diarylogo} style={{width: 40, height: 40}} />
          </TouchableOpacity>
        </View>

        <View style={{width: '25%'}}>
          <TouchableOpacity style={styles.buttons}>
            <Image source={users} style={{width: 40, height: 40}} />
          </TouchableOpacity>
        </View>

        <View style={{width: '25%'}}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => props.navigation.navigate('emergency')}>
            <Image source={lifesaver} style={{width: 35, height: 35}} />
          </TouchableOpacity>
        </View>
      </View>
    
    

  
    
    
    
    </View>
  );
}

export default Home;
