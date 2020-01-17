import React, {useState, useEffect} from "react"

import {ScrollView, FlatList, Text, View} from "react-native"
import FeedItem from "./FeedItem"
import database, {firebase} from '@react-native-firebase/database';
import EmotionsBar from "../emotions/Emotions"
import AsyncStorage from "@react-native-community/async-storage";
function feed() {

    const [FeedList, setFeedList] = useState(new Map())
    let [OriginalFeedList,setOriginalFeedList] = useState(new Map())
    const [selectedEmotions, setSelectedEmotions] = useState({
        happy: true,
        sad: true,
        angry: true,
        excited: true,
        fear: true,
        bored: true
    })
 
    const getEmotionsFromChild = (props) => {
        setSelectedEmotions(props)

    }

    useEffect( () => {
        let dataMap = new Map()
        let dataMapEmotions = {}
        let latestKeywords = []

        const fetchData = async()=>await AsyncStorage.getItem("latestKeywords").then(res=>{
            latestKeywords = JSON.parse(res)
            
        })
        fetchData()
        database()
            .ref('/feed')
            .once('value')
            .then(ds => {

                const data = ds.val()
                for(let el in data){
                    if(el==='happy'||el==='angry'||el==='bored'||el==='excited'||el==='fear'||el==='sad')continue;
                    
                    let dataEl = data[el]
                    let flag = false;
                   for(let i in latestKeywords ) for(let j in dataEl.keywords){
                    if(latestKeywords[i]===dataEl.keywords[j]){flag= true;break;}
                    }
                    if(flag)
                    {let moods = []
                    moods =Object.keys(dataEl.generatedEmotions).reduce((a, b) => dataEl.generatedEmotions[a] > dataEl.generatedEmotions[b] ? a : b);
                    dataEl['moods'] = [moods]
                    dataMap.set(el, dataEl)}
                    
                }
                // console.log(dataMap)
                setFeedList(dataMap)
                setOriginalFeedList(dataMap)
            })
    }, [])
    if (FeedList.size === 0) 
        return (
            <View>
                <EmotionsBar sendEmotionsToParent={getEmotionsFromChild}/>
                <FeedItem key={1} id={1} text="Feed Loading" smilies={0} moods={[]}/>
            </View>
        )
    else 
        return (
            <View>
                <EmotionsBar sendEmotionsToParent={getEmotionsFromChild}/>
                <FlatList
                    data={Array.from(FeedList, ([key, value]) => value)}
                    renderItem={({item}) =>< FeedItem key = {
                        item.id
                    }
                    id = {
                        item.id
                    }
                    text = {
                        item.text
                    }
                    smilies = {
                        item.smilies
                    }
                    moods = {
                        item.moods
                    } />}
                    keyExtractor={item => item
                        .id
                        .toString()}></FlatList>
            </View>
        )
}

export default feed