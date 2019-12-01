import React from "react"
import {View,Text,Button} from "react-native"
import SpotifyAPI from "../spotifyAPI"


function Angry(){

    return(
        <View>
            <Text>Angry</Text>
            <SpotifyAPI setMood = "peaceful meditation "/>

        </View>
    )
}

export default Angry