


export default function GetLyrics(){
    console.log('meow')
    fetch('http://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=48a555dd37f4da903d3831bd93e445bf&track_id=30117939')
    .then((res) => res.json())
}