import React,{useState} from "react"

import {ScrollView,FlatList} from "react-native"
import FeedItem from "./FeedItem"
import database, { firebase } from '@react-native-firebase/database';

function feed(){

    const [FeedList,setFeedList] = useState([<FeedItem key = {1} text = "feed loading" smilies = {0}/>])
    const [flag,setFlag] = useState(false)

    const insert2feed = ()=>{
        const key = database().ref('feed').push().key

        const dat ={
            "id":key,
            "text":"Peace",
            "smilies":1
        }
        const data ={}
        data[key]= dat

        database().ref('feed').update(data)
    }
    
    const getData=()=>{
        if(!flag)
        database().ref('feed').once('value')
            .then(dataSnapshot=>{
                const data =dataSnapshot.val()
                const dataArray=[]
                for(let el in data){
                    dataArray.push(data[el])
                }
                console.log(data)
                

                // console.log(dataList)
                setFlag(true)
                setFeedList(dataArray)
            })
    }
    getData()
   return(
    <FlatList
        data = {FeedList}
        renderItem={({item})=><FeedItem key = {item.id} text = {item.text} smilies = {item.smilies}/>}
        keyExtractor={item=>item.id}
        >
    </FlatList>)
}

export default feed