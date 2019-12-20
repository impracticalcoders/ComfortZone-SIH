import React, {Component, useState, useEffect} from 'react';
import {
    ScrollView,
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Easing,
    StatusBar,
    Image,
    TouchableOpacity,
    Animated,
    Dimensions
} from 'react-native';
import {Button} from 'react-native-elements';
import diarylogo from './images/diaryicon.png';
import lifesaver from './images/lifesaver.png';
import homeicon from './images/homeicon.png';
import logo from './images/Homescreen.jpg';
import users from './images/users.png';
import Feed from './src/Components/Feed/Feed.js';

function Home(props) {
    const styles = StyleSheet.create({
       
        buttons: {
            marginVertical: 4,
            marginHorizontal: 4,
            height: 40,
            backgroundColor: 'white',
            alignItems: 'center',
            
        },

       
    });
    const screenHeight = Math.round(Dimensions.get('window').height);
    const screenWidth = Math.round(Dimensions.get('window').width);

    return (
        <View>
            <View
                style={{
                    marginTop: 0,
                    flex: 1,
                    flexDirection: 'row'
                }}>
                <View style={{
                        width: '50%'
                    }}>
                    <TouchableOpacity
                        style={(styles.buttons, {
                            backgroundColor: 'white',
                            shadowColor:'gray',
                            elevation:3,
                            height: 35
                        })}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontFamily: 'serif',
                                fontSize: 19
                            }}>
                            Online
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                        width: '50%'
                    }}>
                    <TouchableOpacity
                        style={(styles.buttons, {
                            backgroundColor: 'white',
                            shadowColor:'gray',
                            elevation:3,
                            height: 35
                        })}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontFamily: 'serif',
                                fontSize: 19
                            }}>
                            Offline
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View
                style={{
                    marginTop: 30,
                    marginBottom: 10,
                    marginLeft: 10,
                    marginRight: 10
                }}>
                <Button
                    
                    onPress={() => props.navigation.navigate('addfeeditem')}
                    title="Express your feelings here"></Button>
            </View>

            <View style={{
                    height: '78%'
                }}>
                {/* <Image source={logo} style={styles.logo} /> */}
                <Feed/>
            </View>

            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                }}>
                <View style={{
                        width: '25%'
                    }}>
                    <TouchableOpacity
                        style={styles.buttons}
                        onPress={() => props.navigation.navigate('Home')}>
                        <Image
                            source={homeicon}
                            style={{
                                width: 105,
                                height: 70
                            }}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                        width: '25%'
                    }}>
                    <TouchableOpacity
                        style={styles.buttons}
                        onPress={() => props.navigation.navigate('prevnotes')}>
                        <Image
                            source={diarylogo}
                            style={{
                                width: 105,
                                height: 70
                            }}/>
                    </TouchableOpacity>
                </View>

                <View style={{
                        width: '25%'
                    }}>
                    <TouchableOpacity style={styles.buttons}>
                        <Image
                            source={users}
                            style={{
                                width: 105,
                                height: 70
                            }}/>
                    </TouchableOpacity>
                </View>

                <View style={{
                        width: '25%'
                    }}>
                    <TouchableOpacity
                        style={styles.buttons}
                        
                        onPress={() => props.navigation.navigate('emergency')}>
                        <Image
                            source={lifesaver}
                            style={{
                                width: 105,
                                height: 70
                            }}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Home;
