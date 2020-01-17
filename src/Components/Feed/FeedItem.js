import React, {useState} from "react"

import {ScrollView, Text, View} from "react-native"
import {Card, Button, Icon} from 'react-native-elements'
import database, {firebase} from '@react-native-firebase/database';
import AsyncStorage from "@react-native-community/async-storage"
function FeedItem(props) {
    const [smilies, setSimilies] = useState(props.smilies)
    const [flag, setFlag] = useState(false)
    const [smiliesColor, setSmiliesColor] = useState("gray")
    let moods=[]
     moods = props.moods
    AsyncStorage
        .getItem('smilies/' + props.id)
        .then(res => {
            if (res === null || res=== undefined) {
                AsyncStorage.setItem('smilies/' + props.id, JSON.stringify(false))
            } else {
                const val = JSON.parse(res)
                if (val) 
                    setSmiliesColor("green")
                else 
                    setSmiliesColor("gray")
                setFlag(val)
            }
        })
    const updateSmilies = () => {
        
            if (!flag) {
                database()
                    .ref('feed/')
                    .child(props.id.toString())
                    .update({
                        "smilies": smilies + 1
                    })
                setFlag(true)
                AsyncStorage.setItem('smilies/' + props.id, JSON.stringify(true))
                setSmiliesColor('green')
                setSimilies(smilies + 1)
            } else {
                database()
                    .ref('feed/')
                    .child(props.id.toString())
                    .update({
                        "smilies": smilies - 1
                    })
                setFlag(false)
                AsyncStorage.setItem('smilies/' + props.id, JSON.stringify(false))
                setSmiliesColor('gray')
                setSimilies(smilies - 1)
            }
        }
    
    return (
        <View
            style={{
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 10
            }}>
            <Card>
                <Text style={{
                        marginBottom: 10
                    }}>{props.text}</Text>

                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: "100%"
                    }}>
                    <Button
                        buttonStyle={{
                            width: 60,
                            height: 60,
                            backgroundColor: 'white'
                        }}
                        icon={<Icon
                        name = "mood"
                        size = {
                            40
                        }
                        color = {
                            smiliesColor
                        }
                        />}
                        onPress={updateSmilies}></Button>

                    <Text
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 40
                        }}>{smilies}</Text>
                </View>
                <Text>{moods.map(el => el + '  ')}</Text>
            </Card>

        </View>
    )
}

export default FeedItem