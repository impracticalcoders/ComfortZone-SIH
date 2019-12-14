import React, {useState} from "react"

import {ScrollView, FlatList} from "react-native"
import FeedItem from "./FeedItem"
import database, {firebase} from '@react-native-firebase/database';

function feed() {

    const [FeedList, setFeedList] = useState([
        {
            text: "feed loading",
            id: "1"
        }
    ])
    const [flag, setFlag] = useState(false)

    const insert2feed = () => {
        const key = database()
            .ref('feed')
            .push()
            .key

        const dat = {
            "id": key,
            "text": "Peace",
            "smilies": 1
        }
        const data = {}
        data[key] = dat

        database()
            .ref('feed')
            .update(data)
    }

    const getData = () => {
        if (!flag) 
            database()
                .ref('feed')
                .once('value')
                .then(dataSnapshot => {
                    const data = dataSnapshot.val()
                    const dataArray = []
                    for (let el in data) {
                        dataArray.push(data[el])
                    }
                    console.log(data)

                    // console.log(dataList)
                    setFlag(true)
                    setFeedList(dataArray)
                })
        }
    getData()
    return (
        <FlatList
            data={FeedList}
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
            } />}
            keyExtractor={item => item
                .id
                .toString()}></FlatList>
    )
}

export default feed