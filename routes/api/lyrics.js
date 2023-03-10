const express = require('express')
const router = express.Router()

const lyricsCtrl = require('../../controllers/lyrics')


router.get('/get-lyrics', lyricsCtrl.getLyrics)


module.exports = router