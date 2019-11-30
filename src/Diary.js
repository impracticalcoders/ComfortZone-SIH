import React,{useState} from 'react';
import {Text,View,Button,TextInput,StyleSheet} from "react-native"
function Diary() {

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
    const emotionalWordsList = ['sad','tiring','happy','happiest','happier','sleepy']
    /**
     * logic for searching of unique words and storing thier count
     * ** the text from the text input is taken 
     * ** using split(' ') funstion , transfer all the words into an array 
     * ** count the number of times the word repeats in the array and store it into the map
     * ** show the word which is reapeated max number of times
     */
    const calc=()=>{
        var wordsMap ={}

        if(NoteText){
            var list =[]    
            list = NoteText.split(' ')
            list.map(el=>{
                if( emotionalWordsList.includes(el)){
                    if (wordsMap.hasOwnProperty(el)) {
                        wordsMap[el]++;
                    } else {
                        wordsMap[el] = 1;
                    }
                }
            })

            let txt =""
            for(var el in wordsMap){
                txt= txt+ (el + ' counts '+ wordsMap[el])+'\n'
            }
            alert(txt)

            let word=""
            let max=0
            for(el in wordsMap){
                if(wordsMap[el]>max)
                {
                    max=wordsMap[el]
                    word=el
                }
            }
            alert('the most reapeated word is '+word)
        }
           
    }

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
            alert('i think you are feeling '+word)
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