import React, {useState} from 'react';
import Keywords from "./keywords/Keywords"
import {
    Text,
    View,
    Button,
    TextInput,
    StyleSheet,
} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage"

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

    const getEmotion = async () => {
        let word = '';
        const body = new FormData();
        body.append('text', NoteText);
        body.append('api_key', 'fVZe4uwT81OTqfZxAK75VpVHhWMLITn9KBdJWcVy1w0');

        fetch('https://apis.paralleldots.com/v4/emotion', {
            body,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            method: 'POST'
        })
            .then(res => res.json())
            .then(res => {
                // console.log(res);
                let max = 0.0;

                for (var el in res.emotion) {
                    if (max < res.emotion[el]) {
                        max = res.emotion[el];
                        word = el;
                    }
                }

                setmt(word);

                AsyncStorage
                    .getItem('moods')
                    .then(res => {
                        let mooddata = JSON.parse(res);
                        // console.log(mooddata);
                        if (mooddata === null) 
                            mooddata = [];
                        mooddata.push(word);
                        AsyncStorage.setItem('moods', JSON.stringify(mooddata));
                    });

                alert(
                    'You seem to be ' + word + ' . I have just the right thing for you, go to your ' +
                            'media tab ',
                    res['keywords']
                );
            });
        let data = ['hi'];

        await Keywords(NoteText).then(
            generatedKeywords =>
            {AsyncStorage.setItem('latestKeywords',JSON.stringify(generatedKeywords))})
        

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


    };

    const getKeyword =()=>{
      AsyncStorage.getItem('latestKeywords').then(res=>{
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
                <Button name="Save" title="Save" onPress={getEmotion}/>
                {/* <Button name="getKeyword" title="get" onPress={getKeyword}/> */}

            </View>
        </View>
    );
}

export default Diary;
