
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,Text,
  View,Button,
  StatusBar, Image
} from 'react-native'
//import logo from './images/splashimage.png'

function HomeScreen(props){
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
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
      




    
      }
      )


      return (
  
        <View>
           
              <StatusBar
                barStyle="dark-content"
                backgroundColor="#e3e3e3"
              />
        
        
        
        
            
              
              
                <View >
                    <View  > 
                        <Text>Hello World</Text>
                    </View> 
        
                    <View  >
                       <Text>Hello another world</Text>
                    </View>
        
                    <View  >
                        
                    </View> 
                </View>
        
     </View>
               
        
        
        
          )



}

export default HomeScreen