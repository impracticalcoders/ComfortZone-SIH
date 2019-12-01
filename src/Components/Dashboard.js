import React, { useState, useEffect } from 'react';
import {Text,View,Button,TextInput,StyleSheet,ScrollView} from "react-native"

function Dashboard ()  {
    const [musicList,setmusicList] = useState([])
    const [searchItem,setsearchItem] = useState('')

    useEffect(()=>{
        if(searchItem)
        fetch("https://api.spotify.com/v1/search?q="+searchItem+"&type=playlist",{
            headers: {
            'Authorization': 'Bearer ' + 'BQDawofAh5oK4kSxLIRJdz5tmCX4e-GRGTCB90Q7qgv-kEQ6IRPSJ-vR-1wwuzpw7ul7y2O1WTdITxP1KGBFKp34NxRs5Enn4g6Mf_lSWrXiqmXXw2ea8atcFBpcmFuBzn8M702IYqWXxraCTCtxuY4E0rDri91KeYALHbFFnoj7si_RnYOhmYA'
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

    const styles = StyleSheet.create({
        parent:{
            height:"90%",
            width:"100%",
            alignItems:'center'
        },
        InputText:{
            borderColor:'#d6d7da',
            borderWidth:1,
            borderRadius:15,
            marginTop:20,
            maxHeight:'90%',
            width:'95%',
            fontSize:20
        },
        logbtn:{
            marginTop:20
        },
       
    })
   
    return (
        
        <View style={styles.parent}>
            <TextInput 
                style={styles.InputText}
                placeholder='How are you feeling today?' 
                multiline
                onChangeText={(text)=>setsearchItem(text)}
            />
            <View style={styles.logbtn}>
                <Button title="LOG" />
            </View>

            <ScrollView>
                <Text style={{fontSize:20}}> {musicList.map(item=>item+'\n')}</Text>
             </ScrollView>

        </View>
    
    );
};

export default Dashboard;