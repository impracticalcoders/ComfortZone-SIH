import React, {useState, useEffect} from "react"
import {View, TouchableOpacity, Dimensions, KeyboardAvoidingView} from "react-native"
import {Text, Button, Input, CheckBox} from "react-native-elements"
import database from '@react-native-firebase/database';

function Emotions(props) {

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

export default Emotions