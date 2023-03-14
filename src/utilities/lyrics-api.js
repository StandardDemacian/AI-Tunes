// import sendRequest from "./users-api"

const BASE_URL = "/api/lyrics"



export default async function sendRequest(url, method='GET', payload=null) {
    const options = { method }
    
    if(payload) {
        options.headers = { 'Content-Type': 'application/json'}
        options.body = JSON.stringify(payload)
    }
    const res = await fetch(url, options)
    console.log(url)
    if(res.ok) {
        console.log(res.json)
        return res.json()
    } else {
        throw new Error("Bad Request")
    }
}

export async function showLyricsId(artist,track) {
    try {
        const lyricsId = await sendRequest(`${BASE_URL}/get-lyrics-id/${artist}/${track}`)
        return lyricsId
    } catch(err) {
        console.error(err)
    }
}

export async function getSongArray() {
    try{
        const songArray = await sendRequest(`${BASE_URL}/get-songArray`)
        return songArray
    } catch(err){
        console.error(err)
    }
}


export async function showLyrics(artist) {
    try {
        const lyrics = await sendRequest(`${BASE_URL}/get-lyrics/${artist}`)
        return lyrics
    } catch(err) {
        console.error(err)
    }
}