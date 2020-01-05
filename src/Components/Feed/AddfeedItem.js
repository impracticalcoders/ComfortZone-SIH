import React, {useState, useEffect, useLayoutEffect} from "react"
import {View, TouchableOpacity, Dimensions, KeyboardAvoidingView} from "react-native"
import {Text, Button, Input, CheckBox} from "react-native-elements"
import database from '@react-native-firebase/database';
import EmotionsBar from '../emotions/Emotions'
import Keywords from '../keywords/Keywords'

import { Emotions } from "../emotions/Emotions";
function Addfeeditem(props) {

    const [selectedEmotions, setSelectedEmotions] = useState({
        happy: false,
        sad: false,
        angry: false,
        excited: false,
        fear: false,
        bored: false
    })
    const [generatedKeywords, setGeneratedKeywords] = useState({})
    const [generatedEmotions, setGeneratedEmotions] = useState({})

    const screenHeight = Math.round(Dimensions.get('window').height);

    const [text, setText] = useState("")

    const getEmotionsFromChild = (emotions) => {
        setSelectedEmotions(emotions)
    }
    useEffect(() => console.log(generatedKeywords), [generatedKeywords])
    useEffect(() => console.log(generatedEmotions), [generatedEmotions])

    const getKeywordsForText = async () => {
        let res = await Keywords(text)
        setGeneratedKeywords(res['keywords'])
    }
    const getEmotionsForText = async()=>{
        let res = await Emotions(text)
        setGeneratedEmotions(res['emotion'])
    }

    const postToFeed = async () => {

        //waits for the api to get emotions and keywords
        await Promise.all([getKeywordsForText(),getEmotionsForText()])
        
        
        const key = database()
            .ref('feed')
            .push()
            .key

        let objectOfOnlySelectedEmotions =[]

        //adds emotions which are selected by user to an array
        for(let emotion in selectedEmotions){
            if(selectedEmotions[emotion]){
                objectOfOnlySelectedEmotions.push(emotion)
                
            }
        }


        const data = {
            "id": key,
            "smilies": 0,
            "text": text,
            "keywords": generatedKeywords,
            "selectedEmotions": objectOfOnlySelectedEmotions,
            "generatedEmotions":generatedEmotions
        }
        const dat = {}
        dat[key] = data

        database()
            .ref('feed/')
            .update(dat)

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

                <EmotionsBar sendEmotionsToParent={getEmotionsFromChild}/>

            </View>

            <View style={{}}>
                <Button title="Post" onPress={postToFeed}/>
            </View>
        </KeyboardAvoidingView>
    )
   
}

export default Addfeeditem