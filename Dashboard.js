import React from 'react';
import {View,Text,Button} from "react-native"
const Dashboard = (props) => {
    return (
        <View>
            <Text>Hello USer your number is {props.navigation.getParam('phno')}</Text>
        </View>
    );
};

export default Dashboard;