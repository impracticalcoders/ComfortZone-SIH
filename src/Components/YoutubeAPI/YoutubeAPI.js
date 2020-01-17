import AsyncStorage from "@react-native-community/async-storage"
import search from "youtube-search"

async function getContent() {
    let key = "AIzaSyCyX5vLz8C129OuEJJ4vTVkR7uaso11FK8"

    let q = ""

    let res = await AsyncStorage.getItem('latestKeywords')
    let keywords = JSON.parse(res)
    if (keywords === null) 
        keywords = ['motivation']

    for (let i in keywords) {
        q = q + " " + keywords[i]
    }
    q = q + " motivation"

    var opts = {
        maxResults: 10,
        key: key,
        type: "video"
    };

    let results=[]
   await search(q, opts).then((res, err) => {
        if (err) 
            return console.log(err);
        
    results = res.results
        });
        
    return(results)
}



export default getContent