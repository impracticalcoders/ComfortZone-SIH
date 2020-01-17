import React, {useState, useEffect} from "react"
import {View,Dimensions, KeyboardAvoidingView} from "react-native"
import {Button, Input, } from "react-native-elements"
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
    
    const screenHeight = Math.round(Dimensions.get('window').height);

    const [text, setText] = useState("")
    const [loading,setLoading] = useState(false)
    const getEmotionsFromChild = (emotions) => {
        setSelectedEmotions(emotions)
    }
   
    const getKeywordsForText = async () => {
        let res = await Keywords(text)
        // return res['annotations'].map(el=>el.label)
        return res
    }
    const getEmotionsForText = async()=>{
        let res = await Emotions(text)
        return res['emotion']
    }

    const postToFeed = async () => {

        //waits for the api to get emotions and keywords
        setLoading(true)

        let [generatedEmotions,generatedKeywords] = await Promise.all( [getEmotionsForText(),getKeywordsForText()])
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

        await database()
            .ref('feed/')
            .update(dat)
        setLoading(false)
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
                    containerStyle={{maxHeight:400}}
                    onChangeText={(text) => setText(text.toString())}/>

                <EmotionsBar sendEmotionsToParent={getEmotionsFromChild}/>

            </View>

            <View style={{}}>
                <Button title="Post" onPress={postToFeed} loading={loading} disabled={loading}/>
            </View>
        </KeyboardAvoidingView>
    )
   
}

export default Addfeeditem