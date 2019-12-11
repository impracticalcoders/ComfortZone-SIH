import React, {Component, useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

function Metime(props) {
  const [curmood, setcurmood] = useState([]);
  AsyncStorage.getItem('moods').then(res => {
    let moods = [];
    moods = JSON.parse(res);
    console.log(moods[moods.length - 1]);
    setcurmood(moods[moods.length - 1]);
  });

  return (
    <View>
      <View style={{width: '100%'}}>
        <TouchableOpacity
          style={{
            height: 200,
            backgroundColor: '#0fe2f5',
            borderRadius: 30,
            margin: 20,
            justifyContent: 'center',
          }}
          onPress={() => props.navigation.navigate(curmood)}>
          <Text style={{textAlign: 'center', fontSize: 20}}> Music</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 200,
            backgroundColor: '#0fe2f5',
            borderRadius: 30,
            margin: 20,
            justifyContent: 'center',
          }}>
          <Text style={{textAlign: 'center', fontSize: 20}}> Videos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Metime;
