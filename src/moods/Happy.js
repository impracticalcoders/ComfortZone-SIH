import React from "react"
import {View,Text,Button} from "react-native"
import SpotifyAPI from "../spotifyAPI"

function Happy(){

    return(
        <View>
            <Text>Happy</Text>
            <SpotifyAPI setMood = "Beats"/>
        </View>
    )
}

export default Happy