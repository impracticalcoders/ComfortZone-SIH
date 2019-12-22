import React, {useState, useEffect} from "react"

import {ScrollView, FlatList, Text} from "react-native"
import FeedItem from "./FeedItem"
import database, {firebase} from '@react-native-firebase/database';

function feed() {

    const [FeedList, setFeedList] = useState(new Map())

    useEffect(() => {

        const dataArray = new Map()
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
                    dataArray.set(el, dataEl)
                }
                console.log(dataArray)

                // console.log(dataList)
            })
            .then(() => database().ref('feed/sad').once('value'))
            .then(dataSnapshot => {
                const data = dataSnapshot.val()

                for (let el in data) {
                    let dataEl = data[el]
                    // moods = dataArray.get(data[el])

                    if (dataArray.get(el) === undefined) {
                        dataEl['moods'] = ['sad']
                        dataArray.set(el, dataEl)
                    } else 
                        dataArray
                            .get(el)['moods']
                            .push('sad')

                    }
                console.log(dataArray)

                // console.log(dataList)
            })
            .then(() => database().ref('feed/fear').once('value'))
            .then(dataSnapshot => {
                const data = dataSnapshot.val()

                for (let el in data) {
                    let dataEl = data[el]
                    // moods = dataArray.get(data[el])
                    if (dataArray.get(el) === undefined) {
                        dataEl['moods'] = ['fear']
                        getData()
                        dataArray.set(el, dataEl)
                    } else 
                        dataArray
                            .get(el)['moods']
                            .push('fear')

                    }
                console.log(dataArray)

            })
            .then(() => database().ref('feed/bored').once('value'))
            .then(dataSnapshot => {
                const data = dataSnapshot.val()

                for (let el in data) {
                    let dataEl = data[el]
                    // moods = dataArray.get(data[el])
                    if (dataArray.get(el) === undefined) {
                        dataEl['moods'] = ['bored']
                        getData()
                        dataArray.set(el, dataEl)
                    } else 
                        dataArray
                            .get(el)['moods']
                            .push('bored')

                    }
                console.log(dataArray)

            })
            .then(() => database().ref('feed/happy').once('value'))
            .then(dataSnapshot => {
                const data = dataSnapshot.val()

                for (let el in data) {
                    let dataEl = data[el]
                    // moods = dataArray.get(data[el])
                    if (dataArray.get(el) === undefined) {
                        dataEl['moods'] = ['happy']
                        getData()
                        dataArray.set(el, dataEl)
                    } else 
                        dataArray
                            .get(el)['moods']
                            .push('happy')

                    }
                console.log(dataArray)

            })
            .then(() => database().ref('feed/angry').once('value'))
            .then(dataSnapshot => {
                const data = dataSnapshot.val()

                for (let el in data) {
                    let dataEl = data[el]
                    // moods = dataArray.get(data[el])
                    if (dataArray.get(el) === undefined) {
                        dataEl['moods'] = ['angry']
                        getData()
                        dataArray.set(el, dataEl)
                    } else 
                        dataArray
                            .get(el)['moods']
                            .push('angry')

                    }
                console.log(dataArray)

            })
            .then(() => setFeedList(dataArray))

    }, [])

    if (FeedList.size === 0) 
        return (<FeedItem key={1} id={1} text="Feed Loading" smilies={0} moods=""/>)
    else 
        return (
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
                    JSON.stringify(item.moods)
                } />}
                keyExtractor={item => item
                    .id
                    .toString()}></FlatList>
        )
}

export default feed