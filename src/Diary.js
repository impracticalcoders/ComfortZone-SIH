import React,{useState} from 'react';
import {Text,View,Button,TextInput,StyleSheet} from "react-native"
function Diary(props) {

    const style= StyleSheet.create({
        
        CreateNote:{
            fontSize:25,
            borderWidth:1 ,
            height:480,
            borderColor:'gray',            
        },
        MotivationalQuote:{
            padding:20,
           top:20
        }
    })

    const [NoteText,setnt] = useState('')
    

    const getEmotion=()=>{
      
        const body = new FormData
        body.append("text", NoteText)
        body.append("api_key", "fVZe4uwT81OTqfZxAK75VpVHhWMLITn9KBdJWcVy1w0")

        fetch("https://apis.paralleldots.com/v4/emotion", {
        body,
        headers: {
            "Content-Type": "multipart/form-data"
        },
        method: "POST"
        }).then(res=>res.json()).then(res=>{
            console.log(res)
            let max =0.00
            let word=""

            for(var el in res.emotion){
                if(max<res.emotion[el]){
                    max=res.emotion[el]
                    word =el
                }
                
            }
            alert('i think you are feeling '+word+" ,here are some playlists for you")
        props.navigation.navigate(word)

        })

    }

    return (
        <View>
            <TextInput
                multiline
                style={style.CreateNote}
                placeholder='how are you feeling'
                onChangeText={text=>setnt(text.toString())}/>       
             <Button title='click' onPress={getEmotion}/>
            <Text style={style.MotivationalQuote} >It does not matter how slowly you go as long as you do not stop.</Text>   
           
        </View>
              );
}

export default Diary;