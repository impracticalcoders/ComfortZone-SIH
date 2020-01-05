import React, {useState, useEffect} from "react"
import {View, TouchableOpacity, Dimensions, KeyboardAvoidingView} from "react-native"
import {Text, Button, Input, CheckBox} from "react-native-elements"
import database from '@react-native-firebase/database';

function EmotionsBar(props) {

    const [selectedEmotions, setSelectedEmotions] = useState({
        happy: false,
        sad: false,
        angry: false,
        excited: false,
        fear: false,
        bored: false
    })

    let NOSE = []
    for (let el in selectedEmotions) {
        if (selectedEmotions[el] === true) 
            NOSE.push(el)
    }
    

    useEffect(() => {
        props.sendEmotionsToParent(selectedEmotions)
    }, [selectedEmotions])
    return (

        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                height: 50
            }}>
            <View
                style={{
                    width: '16.66%',
                    alignItems: 'center'
                }}>
                <TouchableOpacity
                    onPress={() => setSelectedEmotions({
                        ...selectedEmotions,
                        happy: selectedEmotions.happy
                            ? false
                            : true
                    })}>
                    <Text
                        style={{
                            fontSize: selectedEmotions.happy
                                ? 40
                                : 30
                        }}>🙂</Text>
                </TouchableOpacity>

            </View>

            <View
                style={{
                    width: '16.66%',
                    alignItems: 'center'
                }}>
                <TouchableOpacity
                    onPress={() => setSelectedEmotions({
                        ...selectedEmotions,
                        sad: selectedEmotions.sad
                            ? false
                            : true
                    })}>
                    <Text
                        style={{
                            fontSize: selectedEmotions.sad
                                ? 40
                                : 30
                        }}>😔</Text>
                </TouchableOpacity>

            </View>
            <View
                style={{
                    width: '16.66%',
                    alignItems: 'center'
                }}>
                <TouchableOpacity
                    onPress={() => setSelectedEmotions({
                        ...selectedEmotions,
                        angry: selectedEmotions.angry
                            ? false
                            : true
                    })}>
                    <Text
                        style={{
                            fontSize: selectedEmotions.angry
                                ? 40
                                : 30
                        }}>😠</Text>
                </TouchableOpacity>

            </View>
            <View
                style={{
                    width: '16.66%',
                    alignItems: 'center'
                }}>
                <TouchableOpacity
                    onPress={() => setSelectedEmotions({
                        ...selectedEmotions,
                        fear: selectedEmotions.fear
                            ? false
                            : true
                    })}>
                    <Text
                        style={{
                            fontSize: selectedEmotions.fear
                                ? 40
                                : 30
                        }}>😨</Text>
                </TouchableOpacity>

            </View>
            <View
                style={{
                    width: '16.66%',
                    alignItems: 'center'
                }}>
                <TouchableOpacity
                    onPress={() => setSelectedEmotions({
                        ...selectedEmotions,
                        excited: selectedEmotions.excited
                            ? false
                            : true
                    })}>
                    <Text
                        style={{
                            fontSize: selectedEmotions.excited
                                ? 40
                                : 30
                        }}>🤩</Text>
                </TouchableOpacity>

            </View>
            <View
                style={{
                    width: '16.66%',
                    alignItems: 'center'
                }}>
                <TouchableOpacity
                    onPress={() => setSelectedEmotions({
                        ...selectedEmotions,
                        bored: selectedEmotions.bored
                            ? false
                            : true
                    })}>
                    <Text
                        style={{
                            fontSize: selectedEmotions.bored
                                ? 40
                                : 30
                        }}>😴</Text>
                </TouchableOpacity>

            </View>

        </View>

    )
}
export async function Emotions(text){

    const body = new FormData();
    body.append('text', text);
    body.append('api_key', 'fVZe4uwT81OTqfZxAK75VpVHhWMLITn9KBdJWcVy1w0');

   let EmotionsJson=  fetch('https://apis.paralleldots.com/v4/emotion', {
      body,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      method: 'POST',
    })
      .then(res => res.json())
     

    return(EmotionsJson)
}

export default EmotionsBar