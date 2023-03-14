const express = require('express')
const router = express.Router()

const lyricsCtrl = require('../../controllers/lyrics')


router.get('/get-lyrics/:artist', lyricsCtrl.getLyrics)
router.get('/get-lyrics-id/:artist/:track',lyricsCtrl.getLyricsIdBySongName)
router.get('/get-songArray',lyricsCtrl.getSongNameArray)


module.exports = router