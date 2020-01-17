import React, {useState, useEffect} from 'react';
import YoutubeItem from "./YoutubeItem"
import {View, Text,ScrollView} from 'react-native'
import getContent from "./YoutubeAPI"
const YoutubePage = () => {

    const [content, setContent] = useState([
        {
            link: null,
            imgUrl: 'null',
            title: 'loading',
            description: 'loading',
            thumbnails: {
                medium: {
                    url: null
                }
            }
        }
    ])

    useEffect(() => {
        getContent().then(res => setContent(res))
    }, [])
    return (
        <ScrollView>
            {
                content.map(
                    Item => <YoutubeItem
                        key={Item.link}
                        title={Item.title}
                        link={Item.link}
                        imgUrl={Item.thumbnails.medium.url}/>
                )
            }
        </ScrollView>
    );
};

export default YoutubePage;