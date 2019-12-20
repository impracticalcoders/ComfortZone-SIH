import React, {useState} from 'react';
import {navigationOptions} from 'react-navigation';
import {
  Text,
  View,
  Button,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import diarylogo from '../../images/diaryicon.png';
import entertainlogo from '../../images/movies.png';
import lifesaver from '../../images/lifesaver.png';
import homeicon from '../../images/homeicon.png';
function Diary(props) {
  const style = StyleSheet.create({
    CreateNote: {
      fontSize: 25,

      height: "80%",

      backfaceVisibility: 'visible',
    },
    MotivationalQuote: {
      padding: 20,
      top: 20,
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    parent: {
      height: '100%',
      marginTop: 20,
      alignItems: 'center',
    },
    title: {
      fontSize: 30,
    },
    logo: {
      width: 300,
      height: 300,
      marginTop: 30,
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
      top: 20,
    },
    buttons: {
      marginVertical: 4,
      marginHorizontal: 4,
      height: 40,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    footer: {
      top: 510,
      bottom: 0,
    },
  });

  const [NoteText, setnt] = useState('');
  const [MoodText, setmt] = useState('');

  const getEmotion = () => {
    let word = '';
    const body = new FormData();
    body.append('text', NoteText);
    body.append('api_key', 'fVZe4uwT81OTqfZxAK75VpVHhWMLITn9KBdJWcVy1w0');

    fetch('https://apis.paralleldots.com/v4/emotion', {
      body,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      method: 'POST',
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        let max = 0.0;

        for (var el in res.emotion) {
          if (max < res.emotion[el]) {
            max = res.emotion[el];
            word = el;
          }
        }

        setmt(word);

        let mooddata = ['happy'];
        AsyncStorage.getItem('moods').then(res => {
          mooddata = JSON.parse(res);
          console.log(mooddata);
          if (mooddata === null) mooddata = [];
          mooddata.push(word);
          AsyncStorage.setItem('moods', JSON.stringify(mooddata));
        });

        alert(
          'You seem to be ' +
            word +
            ' . I have just the right thing for you, go to your ' +
            'media tab ',
        );
      });
    let data = ['hi'];

    AsyncStorage.getItem('notes').then(res => {
      data = JSON.parse(res);

      if (data === null) data = [];
      data.push(NoteText);
      console.log(data);
      AsyncStorage.setItem('notes', JSON.stringify(data));
    });
  };

  return (
    <View>
      <TextInput
        multiline={true}
        style={style.CreateNote}
        placeholder="how are you feeling"
        onChangeText={text => setnt(text.toString())}
        
      />

      <View
        style={{
          width: '100%',
          marginTop: 20,
        }}>
        <Button name="Save" title="Save" onPress={getEmotion} />
      </View>
    </View>
  );
}

export default Diary;
