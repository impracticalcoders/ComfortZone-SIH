export default async function Keywords(text) {
    const axios = require('axios')

    const body = new FormData();
    body.append('text', text);
    body.append('api_key', 'fVZe4uwT81OTqfZxAK75VpVHhWMLITn9KBdJWcVy1w0');

    let keywordsJson = await fetch(`https://api.dandelion.eu/datatxt/nex/v1/?min_confidence=0.2&text=${text}&token=4873e0b97e264991852a8935ee924fa2&epsilon=0.5`)
    .then(res => res.json())

    console.log(keywordsJson)

    return (keywordsJson)
}