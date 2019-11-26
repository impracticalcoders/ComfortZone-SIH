import React ,{useState,useEffect} from 'react';
import {View,Text,Button,StyleSheet,TextInput} from 'react-native'
import AsyncStorage from "@react-native-community/async-storage"
function MC(props) {

    const style = StyleSheet.create({

        parent:{
            height:'100%',
            alignItems:'center',
            margin:10
        },
        HelloTxt:{
            fontSize:20
        },
        TextInput:{
            fontSize:20
            ,borderColor:'gray',
            width:'100%'
        }

    })

  
     

    const [Phno,setPhno] = useState('')

    const SignUp =()=>props.navigation.navigate('dashboard',{phno :Phno})
    
    return(
    <View style={style.parent} >
        <Text style={style.HelloTxt}>Hello, Enter Your Number </Text>

        <TextInput style = {style.TextInput} autoFocus onChangeText={
            text=>{
                setPhno(text)
        }}
        onSubmitEditing={SignUp}/>
        
        <Button title='Sign up' onPress={SignUp}/>
    </View>
    )
}
export default MC