const axios = require('axios');


let trackList = []
// const defaultId = 212093082
// justin     bieber
async function getLyrics(req,res){
   try{
    const options = {
        method: 'GET',
        url: `http://api.musixmatch.com/ws/1.1/track.search?q_artist=${req.params.artist}&f_has_lyrics&page_size=10&page=10&s_track_rating=desc`,
        params: {apikey: '48a555dd37f4da903d3831bd93e445bf'},
        headers: {
            'Access-Control-Allow-Methods': '*'
        }
    }
      axios.request(options)
      .then((response) => {
        let trackListBody = response.data.message.body.track_list
        // console.log(response.data.message.body.track_list)
        trackListBody.forEach((song) => {
            // let songData = {
            //     "name": song.track.track_name,
            //     "id": song.track.track_id
            // }
            let songId = song.track.track_id
            // let songName = 
            // console.log(songName)
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
        
     const options = {
         method: 'GET',
         url: `http://api.musixmatch.com/ws/1.1/track.search?q_track=${req.params.track}&page_size=1&page=1`,
         params: {apikey: '48a555dd37f4da903d3831bd93e445bf'},
         headers: {
             'Access-Control-Allow-Methods': '*'
         }
     }
       axios.request(options)
       .then((response) => {
         let trackListBody = response.data.message.body.track_list
        //  console.log(`trackListBody: ${trackListBody}`)
         trackListBody.forEach((song) => {
            console.log(`trackList: ${trackList}`)
             let songId = song.track.track_id

             trackList.push(songId)
                
                  }
                 )
                 const options = {
                     method: 'GET',
                     url: `http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackList[0]}`,
                     params: {apikey: '48a555dd37f4da903d3831bd93e445bf'},
                     headers: {
                         'Access-Control-Allow-Methods': '*'
                     }
                   }
                   axios.request(options)
                     .then((lyricsResponse) => {
                        // console.log(lyricsResponse.data.message)
                         let response = lyricsResponse.data.message.body.lyrics.lyrics_body
                         return response
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


module.exports = {
   getLyrics,
   getLyricsIdBySongName
}

// http://api.musixmatch.com/ws/1.1/track.search?apikey=48a555dd37f4da903d3831bd93e445bf&q_artist=sia&q_track=titanium