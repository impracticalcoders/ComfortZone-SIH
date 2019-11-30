
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,Button,Image} from 'react-native'
import logo from './images/splashimage.jpg'

function Home(props) {
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
      parent:{
        height:"100%",
        marginTop:20,
        alignItems:'center'
      },
      title:{
        fontSize:30
      },
      logo:{
        width: 300,
        height: 300,
        marginTop:30
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#F5FCFF',
      },
      buttons:{
        margin:10,
      }
  
  })

   
  return(

    <View style={styles.container}>   
    <StatusBar
          barStyle="dark-content"
          backgroundColor="#fff"
        />
      
        <View >
            <View  style={styles.buttons}> 
                <Button title="Log your mood"  onPress={()=>props.navigation.navigate('dashboard')}/>
            </View> 

            <View  style={styles.buttons}>
                <Button title="Your Diary"  onPress={()=>props.navigation.navigate('diary')}/>
            </View>

            <View  style={styles.buttons}>
                <Button title="Past Notes" onPress={()=>props.navigation.navigate('pastnotes')}/>
            </View> 
        </View>
       
        </View> 

  
  )
}

export default Home





