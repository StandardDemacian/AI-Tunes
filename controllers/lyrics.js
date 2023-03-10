const axios = require('axios')

async function getLyrics(req, res){
    console.log('meow')
 try{
    const options = {
        method: 'GET',
        url: 'http://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=48a555dd37f4da903d3831bd93e445bf&track_id=30117939',
        // params: {key: 'undefined'},
        headers: {
            'Access-Control-Allow-Methods': '*'
        },
        // data: encodedParams
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data.message.body.lyrics.lyrics_body);
          return response
      }).catch(function (error) {
          console.error(error);
      });
    } catch (error) {
        res.status(400).json(error)
    }
} 


module.exports = {
   getLyrics
}

