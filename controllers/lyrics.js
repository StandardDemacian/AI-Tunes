const axios = require('axios');


let trackList = []
// const defaultId = 212093082
// justin     bieber
async function getLyrics(req,res){
   try{
    
    const options = {
        method: 'GET',
        url: `http://api.musixmatch.com/ws/1.1/track.search?q_artist=${req.body}&f_has_lyrics&page_size=3&page=1&s_track_rating=desc`,
        params: {apikey: '48a555dd37f4da903d3831bd93e445bf'},
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
                    params: {apikey: '48a555dd37f4da903d3831bd93e445bf'},
                    headers: {
                        'Access-Control-Allow-Methods': '*'
                    }
                  }
                  axios.request(options)
                    .then((lyricsResponse) => console.log(lyricsResponse.data.message.body.lyrics.lyrics_body))
        }
    )

    } catch {
        console.log('next')
    }
}

module.exports = {
   getLyrics
}