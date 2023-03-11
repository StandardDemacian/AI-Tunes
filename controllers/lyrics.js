const axios = require('axios')

let trackList = []

async function getLyrics(req, res){
    console.log('meow')
 try{
    const options = {
        method: 'GET',
        url: 'http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin     bieber&f_has_lyrics&page_size=3&page=1&s_track_rating=desc&apikey=48a555dd37f4da903d3831bd93e445bf',
        // params: {key: 'undefined'},
        headers: {
            'Access-Control-Allow-Methods': '*'
        },
        // data: encodedParams
      };
      
      axios.request(options).then(function (response) {
        let trackListBody = response.data.message.body.track_list
        // console.log(trackListBody)
        trackListBody.forEach((song) => {
            let songId = song.track.track_id
            trackList.push(songId)
        })
        return randomTrack = trackList[Math.floor(Math.random() * trackList.length)]
          return response
      }).then(function (response) {
        axios.request({
            method: 'GET',
            url: `http://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=48a555dd37f4da903d3831bd93e445bf&track_id=${randomTrack}`,
            // params: {key: 'undefined'},
            headers: {
                'Access-Control-Allow-Methods': '*'
            },
        })
        console.log('hey')
      })
      .catch(function (error) {
          console.error(error);
      });
    } catch (error) {
        res.status(400).json(error)
    }
} 


module.exports = {
   getLyrics
}

