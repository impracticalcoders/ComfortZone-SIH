import React, { Component, useState } from 'react';
import {
  Platform,
  StyleSheet, Text,
  View, Button,
  StatusBar, Image,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'

function Media(props){
   
     
    return (
    <View>
        <Text>What are you in the mood for?</Text>
        <View style={{width:'100%'}}>
        <TouchableOpacity style={{height:200,backgroundColor:'#0fe2f5',borderRadius:30,margin:20,justifyContent:'center'}}
            onPress={()=>props.navigation.navigate('metime')}>
            <Text style={{textAlign:'center',fontSize:20}}> Me-time</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{height:200,backgroundColor:'#0fe2f5',borderRadius:30,margin:20,justifyContent:'center'}}>
            <Text style={{textAlign:'center',fontSize:20}}> Offline Activities</Text>
        </TouchableOpacity>
        </View>
    </View>)
}

export default Media