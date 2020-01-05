import React, {useState, useEffect} from "react"

import {ScrollView, FlatList, Text, View} from "react-native"
import FeedItem from "./FeedItem"
import database, {firebase} from '@react-native-firebase/database';
import EmotionsBar from "../emotions/Emotions"
function feed() {

    const [FeedList, setFeedList] = useState(new Map())
    let [OriginalFeedList,setOriginalFeedList] = useState(new Map())
    const [FeedListEmotions, setFeedListEmotions] = useState({})
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

    useEffect(() => {
      
        // for(let [key,val] of FeedList){
            console.log(FeedListEmotions)
           

        // 
        let tempMap = new Map()
        for(let emotion in selectedEmotions){
           if(selectedEmotions[emotion])
            for(let [key,val] of OriginalFeedList){
                console.log(FeedListEmotions[`${key}:${emotion}`] + ` ${emotion}`)
                if(FeedListEmotions[`${key}:${emotion}`]){
                    tempMap.set(key,val)
                }
            }
        }
        if(tempMap.size===0) tempMap = OriginalFeedList
        setFeedList(tempMap)

        

        // console.log('tempFeedList =>' + JSON.stringify())
    }, [selectedEmotions])

    useEffect(() => {

        const dataMap = new Map()
        const dataMapEmotions ={}
        database()
            .ref('feed/excited')
            .once('value')
            .then(dataSnapshot => {
                const data = dataSnapshot.val()

                for (let el in data) {
                    let dataEl = data[el]
                    let moods = []
                    moods.push('excited')
                    dataEl['moods'] = moods
                    dataMap.set(el, dataEl)
                    dataMapEmotions[`${el}:excited`]= true

                    
                }
                // console.log(dataMap)

            })
            .then(() => database().ref('feed/sad').once('value'))
            .then(dataSnapshot => {
                const data = dataSnapshot.val()

                for (let el in data) {
                    let dataEl = data[el]
                    // moods = dataMap.get(data[el])

                    if (dataMap.get(el) === undefined) {
                        dataEl['moods'] = ['sad']
                        dataMap.set(el, dataEl)
                    } else 
                        dataMap
                            .get(el)['moods']
                            .push('sad')

                    dataMapEmotions[`${el}:sad`]= true
                    
                }
                // console.log(dataMap)

            })
            .then(() => database().ref('feed/fear').once('value'))
            .then(dataSnapshot => {
                const data = dataSnapshot.val()

                for (let el in data) {
                    let dataEl = data[el]
                    // moods = dataMap.get(data[el])
                    if (dataMap.get(el) === undefined) {
                        dataEl['moods'] = ['fear']
                        dataMap.set(el, dataEl)
                    } else 
                        dataMap
                            .get(el)['moods']
                            .push('fear')

                            dataMapEmotions[`${el}:fear`]= true

                }
            })
            .then(() => database().ref('feed/bored').once('value'))
            .then(dataSnapshot => {
                const data = dataSnapshot.val()

                for (let el in data) {
                    let dataEl = data[el]
                    // moods = dataMap.get(data[el])
                    if (dataMap.get(el) === undefined) {
                        dataEl['moods'] = ['bored']
                        dataMap.set(el, dataEl)
                    } else 
                        dataMap
                            .get(el)['moods']
                            .push('bored')
                            dataMapEmotions[`${el}:bored`]= true

                    
                }
                // console.log(dataMap)

            })
            .then(() => database().ref('feed/happy').once('value'))
            .then(dataSnapshot => {
                const data = dataSnapshot.val()

                for (let el in data) {
                    let dataEl = data[el]
                    // moods = dataMap.get(data[el])
                    if (dataMap.get(el) === undefined) {
                        dataEl['moods'] = ['happy']
                        dataMap.set(el, dataEl)
                    } else 
                        dataMap
                            .get(el)['moods']
                            .push('happy')
                            dataMapEmotions[`${el}:happy`]= true

                }
                // console.log(dataMap)

            })
            .then(() => database().ref('feed/angry').once('value'))
            .then(dataSnapshot => {
                const data = dataSnapshot.val()

                for (let el in data) {
                    let dataEl = data[el]
                    // moods = dataMap.get(data[el])
                    if (dataMap.get(el) === undefined) {
                        dataEl['moods'] = ['angry']
                        dataMap.set(el, dataEl)
                    } else 
                        dataMap
                            .get(el)['moods']
                            .push('angry')
                            dataMapEmotions[`${el}:angry`]= true

                  
                }
            })
            .then(() => {
                setOriginalFeedList(dataMap)
                setFeedList(dataMap)
               setFeedListEmotions(dataMapEmotions)
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