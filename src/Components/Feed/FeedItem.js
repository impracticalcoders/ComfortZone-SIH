import React,{useState} from "react"

import {ScrollView,Text,View,} from "react-native"
import { Card, Button, Icon} from 'react-native-elements'


function FeedItem(props){
    const [smilies,setSimilies] = useState(props.smilies)

    return(
    <View style={{
        marginLeft:10,
        marginRight:10,
        marginBottom:10
    }}>
    <Card>
        <Text style={{marginBottom:10}}>{props.text}</Text>    
        
        <View style={{display:'flex',flexDirection:'row',width:"100%",}}>
            <Button 
                buttonStyle={{width:60,height:60,backgroundColor:'white'}}
                icon={
                    <Icon
                    name="mood"
                    size={40}
                    color="green"
                    />}
                onPress={()=>setSimilies(smilies+1)}    
            ></Button>

            <Text style={{position:'absolute',bottom:0,left:40}}>{smilies}</Text>
        </View>
    </Card>
    
    </View>)
}

export default FeedItem