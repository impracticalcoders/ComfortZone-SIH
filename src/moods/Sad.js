import React from "react"
import {View,Text,Button} from "react-native"
import SpotifyApi from "../spotifyAPI"

function Sad(){

    return(
        <View>
            <Text>Sad</Text>
            <SpotifyApi setMood = "happy "/>
        </View>
    )
}

export default Sad