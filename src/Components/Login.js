import React, {Component, useState, useEffect} from 'react';
import {
  ScrollView,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Easing,
  StatusBar,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
  Linking,
} from 'react-native';

import pic from './images/logo_login.png';

function Login() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#A1B0BC',
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Image source={pic}/>
    </View>
    <View>
        <TextInput placeholder="username or email"/>
    </View>
    <View>
          <TextInput placeholder="password" secureTextEntry='true' />
    </View>
  );
}

export default Login;
