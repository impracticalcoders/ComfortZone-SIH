import React from "react"
import {View,Button,Text} from "react-native"

function Navbar(props){
return(<View> 
    <View>
        <Button title="home"></Button>
    </View>

    <View>
        <Button title="diary" onPress={()=>props.navigation.navigate('diary')}></Button>
    </View>

    <View>
        <Button title='spotify'></Button>
    </View>

    </View>)
}
export default Navbar