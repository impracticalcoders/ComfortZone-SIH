import React, {useState, useEffect, useLayoutEffect} from "react"
import {View, TouchableOpacity, Dimensions, KeyboardAvoidingView} from "react-native"
import {Text, Button, Input, CheckBox} from "react-native-elements"
import database from '@react-native-firebase/database';
import Emotions from '../emotions/Emotions'
function Addfeeditem(props) {

    const [selectedEmotions, setSelectedEmotions] = useState({
        happy: false,
        sad: false,
        angry: false,
        excited: false,
        fear: false,
        bored: false
    })
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [text, setText] = useState("")

    const getEmotionsFromChild = (props)=>{
        setSelectedEmotions(props)
        console.log(selectedEmotions)
    }

    const postToFeed = () => {

        const key = database()
            .ref('feed')
            .push()
            .key

        const data = {
            "id": key,
            "smilies": 0,
            "text": text
        }
        const dat = {}
        dat[key] = data

        for (let el in selectedEmotions) {
            if(selectedEmotions[el]===true)
            database()
                .ref('feed/' + el)
                .update(dat)
        }

        alert('posted')
        props
            .navigation
            .navigate('HomeS')

    }
    return (
        <KeyboardAvoidingView style={{
                flex: 1
            }}>
            <View
                style={{
                    maxHeight: '95%',
                    minHeight: '85%'
                }}>
                <Input
                    multiline={true}
                    placeholder="Write something good about yourself"
                    numberOfLines={8}
                    onChangeText={(text) => setText(text.toString())}/>

               <Emotions sendEmotionsToParent={getEmotionsFromChild}/>

            </View>

            <View style={{}}>
                <Button title="Post" onPress={postToFeed}/>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Addfeeditem