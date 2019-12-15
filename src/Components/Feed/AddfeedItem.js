import React, { useState } from "react"
import {View} from "react-native"
import {Text, Button, Input} from "react-native-elements"
import database, {firebase} from '@react-native-firebase/database';
function Addfeeditem(props) {

    const [text,setText] =useState("")
    const postToFeed = ()=>{
        const key = database().ref('feed').push().key
        const data ={
            "id":key,
            "smilies":0,
            "text":text
        }
        const dat = {}
        dat[key] = data

        database().ref('feed').update(dat)
        alert('posted')
        props.navigation.navigate('HomeS')
        
    }
    return (
            <View>

                <Input
                    multiline={true}
                    placeholder="Write something good about yourself"
                    onChangeText={(text)=>setText(text.toString()) }
                    containerStyle={{height:"87%"}}/>
                <Button title="Post" onPress={postToFeed}/>

            </View>
    )
}

export default Addfeeditem 