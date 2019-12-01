import React from "react"
import {View,Text,Button} from "react-native"
import SpotifyAPI from "../spotifyAPI"


function Bored(){

    return(
        <View>
            <Text>Bored</Text>
            <SpotifyAPI setMood = "Excited "/>

        </View>
    )
}

export default Bored