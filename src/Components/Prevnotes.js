
import React,{useState} from 'react';
import {navigationOptions} from 'react-navigation'
import {Text,View,Button,StyleSheet,TouchableOpacity,Image, AsyncStorage} from "react-native"
import diarylogo from '../../images/diaryicon.jpg'
import entertainlogo from '../../images/movies.png'
import lifesaver from '../../images/lifesaver.png'
import homeicon from '../../images/homeicon.png'

function Prevnotes(props){

    const styles = StyleSheet.create({
        container: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        },
        parent: {
          height: "100%",
          marginTop: 20,
          alignItems: 'center'
        },
        title: {
          fontSize: 30
        },
        logo: {
          height:400,width:400,opacity:0.5
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
          top: 20
        },
        buttons: {
          marginVertical: 4,
          marginHorizontal: 4,
          height:40,backgroundColor:'white',alignItems:'center'
        },
        footer: {
          top:110,
          bottom: 0,
        },
        
      })

    const [dataList,sdt] = useState([])
    
    AsyncStorage.getItem('notes').then(res=>{
        sdt(JSON.parse(res))
    })
    return(
        <View style={{marginTop:20,marginBottom:20}}>
            <Button title="create" onPress={()=>props.navigation.navigate('diary')}></Button>
            <Text>
                {dataList.map(el=>el+'\n')}
            </Text>
                
        
            <View style={styles.footer}>

                    
              <View style={{top:320,position:'absolute',flex: 1, flexDirection: 'row'} }> 
              <View style={{width:'25%'}}>
              <TouchableOpacity style={styles.buttons} onPress={()=>props.navigation.navigate('Home')}>
              <Image source={homeicon} style={{width:40,height : 40}}/>
                </TouchableOpacity>
              </View>

              <View style={{width:'25%'}}>
              <TouchableOpacity style={styles.buttons} onPress={()=>props.navigation.navigate('prevnotes')}>
              <Image source={diarylogo} style={{width:40,height : 40}}/>
                </TouchableOpacity>  
              </View>

              <View style={{width:'25%'}}>
              <TouchableOpacity style={styles.buttons} onPress={()=>props.navigation.navigate('media')}>
              <Image source={entertainlogo} style={{width:40,height : 40}}/>
                </TouchableOpacity>
                
              </View>

              <View style={{width:'25%'}}>
              <TouchableOpacity style={styles.buttons} onPress={()=>props.navigation.navigate('emergency')}>
              <Image source={lifesaver} style={{width:35,height : 35}}/>
                </TouchableOpacity>
                
              </View>


    </View>
    </View>
    </View>)
}

export default Prevnotes