
export default async function Keywords(text){

   
    const body = new FormData();
    body.append('text', text);
    body.append('api_key', 'fVZe4uwT81OTqfZxAK75VpVHhWMLITn9KBdJWcVy1w0');

   let keywordsJson=  fetch('https://apis.paralleldots.com/v4/keywords', {
      body,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      method: 'POST',
    })
      .then(res => res.json())
      

    return(keywordsJson)
}