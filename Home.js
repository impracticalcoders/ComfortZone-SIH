
import React from 'react';
import {Text,View,Button,Image,StyleSheet} from 'react-native'
import logo from './images/logo.jpg'

function Home(props){
  
  const styles = StyleSheet.create({
      parent:{
        height:"100%",
        marginTop:20,
        alignItems:'center'/*for horizontal alignment*/ 
      },
      title:{
        fontSize:30
      },
      logo:{
        width: 300,
        height: 300,
        marginTop:30
      },
      continue:{marginTop:30}

  })
   
  return(

    <View style={styles.parent}>   
       <Text style={styles.title}>Comfort Zone</Text>
        <Image source ={logo} style={styles.logo}/>
        <View style={styles.continue}>
            <Button title="Continue" onPress={()=>props.navigation.navigate('dashboard')}  />
        </View>
       
        </View> 

  
  )
}

export default Home;
