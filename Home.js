import React, {Component} from 'react';
import {
  ScrollView,
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import {Icon} from 'native-base';
import diarylogo from './images/diaryicon.jpg';
import entertainlogo from './images/movies.png';
import lifesaver from './images/lifesaver.png';
import homeicon from './images/homeicon.png';
import {TabNavigator} from 'react-navigation';
import Diary from './src/Components/Diary.js';
import Dashboard from './src/Components/Dashboard.js';
import HomeScreen from './src/Components/HomeScreen.js';
import Navbar from './src/Components/Navbar';
import Emergency from './src/Components/seekhelp.js';
import logo from './images/Homescreen.jpg';
import users from './images/users.png';

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
    footer: {
      top: 90,
      bottom: 0,
    },
    header: {
      top: 0,
      bottom: 90,
    },
  });

  return (
    <View>
      <View
        style={{
          top: 10,
          position: 'relative',
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
            <Text
              style={{
                textAlign: 'center',
                fontSize: 15,
              }}>
              Offline
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Image source={logo} style={styles.logo} />

      <View style={styles.footer}>
        <View
          style={{
            top: 10,
            position: 'relative',
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
    </View>
  );
}

export default Home;
