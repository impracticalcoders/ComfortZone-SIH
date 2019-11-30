import React,{useEffect,useState} from 'react';
import {View,Text,StyleSheet,ScrollView} from "react-native"

function spotifyAPI(props) {
    
    const [musicList,setmusicList] = useState([])
    const searchItem = props.setMood

    useEffect(()=>{
        if(searchItem)
        fetch("https://api.spotify.com/v1/search?q="+searchItem+"&type=playlist",{
            headers: {
            'Authorization': 'Bearer ' + 'BQBB6dZ7geYKzhjJ08DAPChf-b9jBYgtgE0dD4jM56ZtDRUZGpnGvCERBwO-8TfnV54Acwf-QugvGHp8Jglm9m_AuGWWiBQ6Pl0f19l2_QWVK2pyGpKFnE2_I7pdg8l8Rr8Lsxv8uJtNefcUns-5XKnTXIajj-nWBnp_a7o_zzrer3b0pzqBDjs'
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