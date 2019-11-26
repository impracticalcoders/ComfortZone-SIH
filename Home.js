
import React from 'react';
import {Text,View,Button} from 'react-native'

const Home= (props)=>{
  
  return(
    <View style={{height:"100%",alignItems:'center'/*for horizontal alignment*/ }}>   
       <Text style={{fontSize:30}}>Comfort Zone</Text>

       <View style={{justifyContent:'center',height:'100%'}}>
         <Button title="Sign up" onPress={()=>props.navigation.navigate('MCS')}  />
       </View>
       
        </View> 
  
  )
}

export default Home;
