import React,{useState} from 'react';
import {navigationOptions} from 'react-navigation'
import {Text,View,Button,Image,TextInput,StyleSheet,TouchableOpacity, AsyncStorage} from "react-native"
import diarylogo from '../../images/diaryicon.jpg'
import entertainlogo from '../../images/movies.png'
import lifesaver from '../../images/lifesaver.png'
import homeicon from '../../images/homeicon.png'
function Diary(props) {
   

    const style= StyleSheet.create({
        
        CreateNote:{
            
            fontSize:25,
        
            height:400,
             
            backfaceVisibility:'visible',         
        },
        MotivationalQuote:{
            padding:20,
           top:20
        },
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
          },
          parent: {
            height: "100%",
            marginTop: 20,
            alignItems: 'center'
          },
          title: {
            fontSize: 30
          },
          logo: {
            width: 300,
            height: 300,
            marginTop: 30
          },
          welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
            marginBottom: 50,
            color: 'black',
          },
          MotivationalQuote: {
            padding: 20,
            top: 20
          },
          buttons: {
            marginVertical: 4,
            marginHorizontal: 4,
            height:40,backgroundColor:'white',alignItems:'center'
          },
          footer: {
            top:510,
            bottom: 0,
          },
    })

    const [NoteText,setnt] = useState('')
    const [MoodText,setmt] = useState('')

    const getEmotion=()=>{
      let word=""
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
            

            for(var el in res.emotion){
                if(max<res.emotion[el]){
                    max=res.emotion[el]
                    word =el
                }
                
            }
            setmt(word)

            let mooddata =['happy']
            AsyncStorage.getItem('moods').then(res=>{
            mooddata = JSON.parse(res) 
            console.log(mooddata)
            mooddata.push(word)
            AsyncStorage.setItem('moods',JSON.stringify(mooddata))
        })
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
            
        
            <View style={{top:670,position:'absolute',flex: 1, flexDirection: 'row'} }> 
    <View style={{width:'25%'}}>
    <TouchableOpacity  onPress={()=>props.navigation.navigate('Home')}>
    <Image source={homeicon} style={{width:40,height : 40}}/>
        </TouchableOpacity>
    </View>

    <View style={{width:'25%'}}>
      <TouchableOpacity  onPress={()=>props.navigation.navigate('prevnotes')}>
      <Image source={diarylogo} style={{width:40,height : 40}}/>
        </TouchableOpacity>  
    </View>

    <View style={{width:'25%'}}>
    <TouchableOpacity onPress={()=>props.navigation.navigate('media')}>
    <Image source={entertainlogo} style={{width:40,height : 40}}/>
        </TouchableOpacity>
        
    </View>

    <View style={{width:'25%'}}>
    <TouchableOpacity  onPress={()=>props.navigation.navigate('emergency')}>
    <Image source={lifesaver} style={{width:40,height : 40}}/>
        </TouchableOpacity>
        
    </View>


    </View>
        </View>
              );
}

export default Diary;