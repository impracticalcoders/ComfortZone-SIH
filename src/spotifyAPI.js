import React,{useEffect,useState} from 'react';
import {View,Text,StyleSheet,ScrollView} from "react-native"

function spotifyAPI(props) {
    
    const [musicList,setmusicList] = useState([])
    const searchItem = props.setMood

    useEffect(()=>{
        if(searchItem)
        fetch("https://api.spotify.com/v1/search?q="+searchItem+"&type=playlist",{
            headers: {
            'Authorization': 'Bearer ' + 'BQB6RBX9mtCTCFgWDAMdJq_TeG5P0RO44E484IrU4eZABiBQTHZ9rYpkuyUsytEIX4TZNwAVbZkfZEJvGVE5O7MfBSLAZhX3Lu2grqHQ0v-h_NDu5AI5g349r6SrJ8s9ZUA-ZA2lnWoTm8OSFBNMOu5v2HcobvZJG87T7i6tfsLSSzItuUEqreA'
            }
        }).then(res=>res.json()).then(resp=>{
            let list = []
            for(let i in resp.playlists.items )
            {
                list.push(resp.playlists.items[i].name)
            }
            setmusicList(list)
            

        })
    })

    const style= StyleSheet.create({
        playlists:{
            fontSize:20,
            textAlign:'center',
            lineHeight:40
        }
    })
    return (
        <ScrollView>
           <Text style={style.playlists}>{musicList.map(el=>el+'\n')}</Text>
        </ScrollView>
    );
}

export default spotifyAPI;