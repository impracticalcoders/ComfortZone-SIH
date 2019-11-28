import React, { useState, useEffect } from 'react';
import {Text,View,Button,TextInput,StyleSheet} from "react-native"
const Dashboard = () => {

    const styles = StyleSheet.create({
        parent:{
            height:"90%",
            width:"100%"
        },
        InputText:{
            borderColor:'#d6d7da',
            borderWidth:1,
            maxHeight:'90%',
            fontSize:20
        }
    })
   
    return (
        
        <View style={styles.parent}>
            
            <TextInput 
            style={styles.InputText}
            placeholder='How are you feeling today?' 
            multiline
            />
            <Button title="LOG"/>
        </View>
        
    );
};

export default Dashboard;