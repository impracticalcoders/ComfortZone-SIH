import React from 'react';
import {View, Text,Linking} from "react-native"
import {Card, Image, Button} from "react-native-elements"
import YoutubeApi from "./YoutubeAPI"

const YoutubeItem = (props) => {

     const play = ()=>{
        Linking.openURL(props.link)
     }
    return (
        <View
            style={{
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 10
            }}>
            <Card >
                <View
                    >
                    <Image
                        source={{
                            uri: props.imgUrl
                        }}
                        style={{
                            width: '100%',
                            height: 200
                        }}/>
                    <View
                        style={{
                            marginLeft: 10,
                        }}>

                        <Text
                            style={{
                                fontSize: 20,
                                margin:10
                            }}>{props.title}
                        </Text>


                        <Button
                            title="play"
                            containerStyle={{
                                margin: 8
                            }}
                            onPress={play}/>

                    </View>
                </View>
            </Card>
        </View>
    );
};

export default YoutubeItem;