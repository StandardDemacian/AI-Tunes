const axios = require('axios');

let trackList = []
const key = process.env.API_KEY

async function getLyrics(req,res){
   try{
    const options = {
        method: 'GET',
        url: `http://api.musixmatch.com/ws/1.1/track.search?q_artist=${req.params.artist}&f_has_lyrics&page_size=10&page=10&s_track_rating=desc`,
        params: {apikey: key},
        headers: {
            'Access-Control-Allow-Methods': '*'
        }
    }
      axios.request(options)
      .then((response) => {
        let trackListBody = response.data.message.body.track_list
        trackListBody.forEach((song) => {
            let songId = song.track.track_id
            trackList.push(songId)
            randomTrackId = trackList[Math.floor(Math.random() * trackList.length)]  
                 }
                )
                const options = {
                    method: 'GET',
                    url: `http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${randomTrackId}`,
                    params: {apikey: key},
                    headers: {
                        'Access-Control-Allow-Methods': '*'
                    }
                  }
                  axios.request(options)
                    .then((lyricsResponse) => {
                        let response = lyricsResponse.data.message.body.lyrics
                        return response
                        // returns a lyrics object that we need to match ID
                    })

                    .then(response => {
                        res.status(200).json({lyrics: response})
                        //ADD remove /n function here
                    })
        }
    )

    } catch {
        
        console.log('next')
        
    }
}

async function getLyricsIdBySongName(req,res){
    try{
        console.log(req.params)
     const options = {
         method: 'GET',
         url: `http://api.musixmatch.com/ws/1.1/track.search?q_artist=${req.params.artist}&q_track=${req.params.track}`,
         params: {apikey: key},
         headers: {
             'Access-Control-Allow-Methods': '*'
         }
     }
       axios.request(options)
       .then((response) => {
        let trackListBody = response.data.message.body.track_list
        trackListBody.forEach((song) => {
            let songId = song.track.track_id
                 const options = {
                     method: 'GET',
                     url: `http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${songId}`,
                     params: {apikey: key},
                     headers: {
                         'Access-Control-Allow-Methods': '*'
                     }
                   }
                   axios.request(options)
                     .then((lyricsIdResponse) => {
                         let response = lyricsIdResponse.data.message.body.lyrics
                         return response
                     })
                     .then(response => {
                        trackList.length = 0
                        // console.log('v')
                        // console.log({lyrics: response})
                        // console.log('^')
                         res.status(200).json({lyrics: response})
                         //ADD remove /n function here
                     })
                })
        })
     
 
     } catch {
         console.log('next')
     }
 }


module.exports = {
   getLyrics,
   getLyricsIdBySongName
}

// http://api.musixmatch.com/ws/1.1/track.search?apikey=48a555dd37f4da903d3831bd93e445bf&q_artist=sia&q_track=titanium
