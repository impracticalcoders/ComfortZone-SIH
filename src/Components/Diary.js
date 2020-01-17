import React, {useState} from 'react';
import Keywords from "./keywords/Keywords"
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {Button} from "react-native-elements"
import AsyncStorage from "@react-native-community/async-storage"
import {Emotions} from "./emotions/Emotions";

function Diary(props) {
    const style = StyleSheet.create({
        CreateNote: {
            fontSize: 25,

            height: "80%",

            backfaceVisibility: 'visible'
        }
    });

    const [NoteText, setnt] = useState('');
    const [MoodText, setmt] = useState('');
    const [loading, setLoading] = useState(false)

    const getKeywordsForText = async () => {
        let res = await Keywords(NoteText)
        // return res['annotations'].map(el=>el.label)
        return res
    }
    const getEmotionsForText = async () => {
        let res = await Emotions(NoteText)
        return res['emotion']
    }

    const getEmotion = async () => {
        setLoading(true)
        let [generatedEmotions, generatedKeywords] = await Promise.all(
            [getEmotionsForText(), getKeywordsForText()]
        )

        let mood = Object
            .keys(generatedEmotions)
            .reduce(
                (a, b) => generatedEmotions[a] > generatedEmotions[b]
                    ? a
                    : b
            );

        setLoading(false)

        alert(
            'You seem to be ' + mood + ' . I have just the right thing for you, go to your ' +
            'media tab '
        );

        let data = [];

        AsyncStorage.setItem('latestKeywords', JSON.stringify(generatedKeywords))

        AsyncStorage
            .getItem('notes')
            .then(res => {
                data = JSON.parse(res);

                if (data === null) 
                    data = [];
                data.push(NoteText);
                // console.log(data);
                AsyncStorage.setItem('notes', JSON.stringify(data));
            })
        props
            .navigation
            .navigate('HomeS')

    };

    const getKeyword = () => {
        AsyncStorage
            .getItem('latestKeywords')
            .then(res => {
                const keywords = JSON.parse(res)
            })
    }
    return (
        <View>
            <TextInput
                multiline={true}
                style={style.CreateNote}
                placeholder="how are you feeling"
                onChangeText={text => setnt(text.toString())}/>

            <View
                style={{
                    width: '100%',
                    marginTop: 20
                }}>
                <Button
                    name="Save"
                    title="Save"
                    onPress={getEmotion}
                    loading={loading}
                    disabled={loading}/>

            </View>
        </View>
    );
}

export default Diary;
