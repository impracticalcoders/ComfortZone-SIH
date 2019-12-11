import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import {Button} from 'native-base';
//import icon from './images/exclamation.png';

function Emergency() {
  return (
    <View>
      <Image
        source={'./images/exclamation.png'}
        style={{width: '100%', height: 50}}
      />

      <Text
        style={{
          fontSize: 50,
          textAlign: 'center',
          margin: 10,
          marginBottom: 50,
          color: 'black',
        }}>
        Contact
      </Text>

      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          margin: 10,
          marginBottom: 50,
          color: 'black',
        }}
        onPress={() => Linking.openURL(`tel:9820466726`)}>
        24x7 Helpline: +91-9820466726
      </Text>
      <Button title="Call" onPress={() => Linking.openURL(`tel:9820466726`)} />
      <Button
        title="Call"
        onPress={() =>
          Linking.openURL(
            `whatsapp://send?phone=+918050004321&text=I NEED HELP`,
          )
        }
      />
    </View>
  );
}

export default Emergency;
