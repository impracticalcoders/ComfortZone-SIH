
import React from 'react';
import {Text,View,Button,Image} from 'react-native'
import logo from './images/logo.jpg'
const Home= (props)=>{
  
  return(
    <View style={{height:"100%",marginTop:20,alignItems:'center'/*for horizontal alignment*/ }}>   
       <Text style={{fontSize:30}}>Comfort Zone</Text>
        <Image source ={logo} style={{width: 300, height: 300,marginTop:30}}/>
        
        <View style={{marginTop:30}}>
         <Button title="Continue" onPress={()=>props.navigation.navigate('SignIn')}  />
         </View>
       
        </View> 
  
  )
}

export default Home;
