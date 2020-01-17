export default async function Keywords(text) {

    const MonkeyLearn = require('monkeylearn')

    const ml = new MonkeyLearn('861797d3091126a147cf46618e7a90e2a359fef6')
    let model_id = 'ex_YCya9nrn'
    let data = [text]

    let res = await ml
        .extractors
        .extract(model_id, data)

    let keywordsArray = (res.body)[0]
        .extractions
        .map(el => el.parsed_value)
    console.log(keywordsArray)
    return (keywordsArray)
}