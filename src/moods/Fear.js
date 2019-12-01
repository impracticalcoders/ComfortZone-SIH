import React from "react"
import {View,Text,Button} from "react-native"
import SpotifyAPI from "../spotifyAPI"

function Fear(){

    return(
        <View>
            <Text>Fear</Text>
            <SpotifyAPI setMood = "Team"/>

        </View>
    )
}

export default Fear