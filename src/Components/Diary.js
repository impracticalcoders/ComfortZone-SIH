import React,{useState} from 'react';
import {navigationOptions} from 'react-navigation'
import {Text,View,Button,TextInput,StyleSheet,TouchableOpacity, AsyncStorage} from "react-native"
function Diary(props) {
   

    const style= StyleSheet.create({
        
        CreateNote:{
            
            fontSize:25,
     
            height:550,
             
            backfaceVisibility:'visible',         
        },
        MotivationalQuote:{
            padding:20,
           top:20
        },
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
            alert('I think you are feeling '+word+" ,I think I have just the right thing for you - check out your media! ")

        })
        let data =['hi']
       
        AsyncStorage.getItem('notes').then(res=>{
            data = JSON.parse(res) 
            console.log(data)
            data.push(NoteText)
            AsyncStorage.setItem('notes',JSON.stringify(data))
        })
    }
  

    return (
        <View>
            <TextInput
                multiline
                style={style.CreateNote}
                placeholder='how are you feeling'
                onChangeText={text=>setnt(text.toString())}/>     

            <View style={{width:'100%',marginTop:20}}>  
                <Button name="Save" title='Save' onPress={getEmotion}/>
            </View>
            
        
            
      <View style={{top:657,position:'absolute',flex: 1, flexDirection: 'row'} }> 
    <View style={{width:'25%'}}>
    <TouchableOpacity style={{height:80,backgroundColor:'green'}} onPress={()=>props.navigation.navigate('Home')}>
        <Text>Home</Text>
        </TouchableOpacity>
    </View>

    <View style={{width:'25%'}}>
      <TouchableOpacity style={{height:80,backgroundColor:'blue'}} onPress={()=>props.navigation.navigate('prevnotes')}>
        <Text style={{color:'white',fontSize:20}}>Diary</Text>
        </TouchableOpacity>  
    </View>

    <View style={{width:'25%'}}>
    <TouchableOpacity style={{height:80,backgroundColor:'yellow'}} onPress={()=>props.navigation.navigate('diary')}>
        <Text>spotify</Text>
        </TouchableOpacity>
        
    </View>

    <View style={{width:'25%'}}>
    <TouchableOpacity style={{height:80,backgroundColor:'red'}} onPress={()=>props.navigation.navigate('diary')}>
        <Text>Emergency!</Text>
        </TouchableOpacity>
        
    </View>


    </View>
        </View>
              );
}

export default Diary;