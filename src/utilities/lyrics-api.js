// import sendRequest from "./users-api"

const BASE_URL = "/api/lyrics"



export default async function sendRequest(url, method='GET', payload=null) {
    const options = { method }
    
    // if(payload) {
    //     options.headers = { 'Content-Type': 'application/json'}
    //     options.body = JSON.stringify(payload)
    // }
    const res = await fetch(url, options)
    console.log(url)
    if(res.ok) {
        console.log(res.json)
        return res.json()
    } else {
        throw new Error("Bad Request")
    }
}



export async function showLyrics() {
    try {
        const lyrics = await sendRequest(`${BASE_URL}/get-lyrics`)
        console.log(lyrics)
        return lyrics
    } catch(err) {
        console.error(err)
    }
}