import React,{useState} from "react"

import {ScrollView,} from "react-native"
import FeedItem from "./FeedItem"
import database, { firebase } from '@react-native-firebase/database';

function feed(){

    const [FeedList,setFeedList] = useState([<FeedItem key = {1} text = "feed loading" smilies = {0}/>])
    const [flag,setFlag] = useState(false)

    const insert2feed = ()=>{
        const key = database().ref('feed').push().key

        const dat ={
            "text":"Good morning",
            "smilies":6
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
                console.log(data)
                const dataList=[]
                for(let el in data){
                    dataList.push(<FeedItem key = {el} text = {data[el].text} smilies = {data[el].smilies}/>)
                }

                // console.log(dataList)
                setFlag(true)
                setFeedList(dataList)
            })
    }
    getData()
   return(
    <ScrollView>
        {FeedList}
    </ScrollView>)
}

export default feed