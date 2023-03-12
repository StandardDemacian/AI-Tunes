const express = require('express')
const router = express.Router()

const lyricsCtrl = require('../../controllers/lyrics')


router.get('/get-lyrics/:artist', lyricsCtrl.getLyrics)
router.get('/get-lyrics-id/:track',lyricsCtrl.getLyricsIdBySongName)


module.exports = router