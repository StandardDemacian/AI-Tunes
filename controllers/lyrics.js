const axios = require('axios');


let trackList = []
// const defaultId = 212093082
// justin     bieber
async function getLyrics(req,res){
   try{
    console.log(req.params.artist)
    const options = {
        method: 'GET',
        url: `http://api.musixmatch.com/ws/1.1/track.search?q_artist=${req.params.artist}&f_has_lyrics&page_size=3&page=1&s_track_rating=desc`,
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
                    .then((lyricsResponse) => {
                        let response = lyricsResponse.data.message.body.lyrics.lyrics_body
                        return response
                    })

                    .then(response => {
                        res.status(200).json({lyrics: response})
                        // or res.status(200).json(response)
                        //ADD remove /n function here
                    })
        }
    )

    } catch {
        console.log('next')
    }
}

module.exports = {
   getLyrics
}