import React,{useEffect,useState} from 'react';
import {View,Text,StyleSheet,ScrollView} from "react-native"

function spotifyAPI(props) {
    
    const [musicList,setmusicList] = useState([])
    const searchItem = props.setMood

    useEffect(()=>{
        if(searchItem)
        fetch("https://api.spotify.com/v1/search?q="+searchItem+"&type=playlist",{
            headers: {
            'Authorization': 'Bearer ' + 'BQDOdmiXhPImBVTGDo6C-F_SKvv9ID91hE7z6cd3TOliPlPNT4IGjULUz0bwtLMzDIW6Jg4seZA9VbKZyJXcjVCUNkvmo8WDGcJbfMRuqz69SaX5uJ7tZLppxMdC9bzU_7-DAlwcwgVrCGcr03wvfvt6GmHrbBCdJTpNpYtebHHpzyfpxmGM8uo'
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