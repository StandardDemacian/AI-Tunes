const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}

async function create(req, res, next) {
    // just for right now I want to see if this is connected
    try {
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.json(token)
    } catch (error) {
        res.status(400).json(error)
    }
}

async function logIn(req, res, next) {
    try {
        const user = await User.findOne({email: req.body.email})
        if(bcrypt.compareSync(req.body.password, user.password)) {
            res.json(createJWT(user))
        } 
    } catch (error) {
        res.status.Code = 422
        throw error
    }
}

async function updateScore(req, res, next){
    try{
        const user = await User.findOne({email: req.body.email})
        user.score++
        user.save()
        res.status(200).json(user)
    } catch(error){
        res.status.Code = 422
        throw error
    }
}

async function show(req, res, next){
    try{
        const users = await User.find({})
        res.json(users)
    }
    catch (error){
        console.log(error)
        res.status(400).json(error)
    }
}


function checkToken(req, res) {
    console.log('req.user', req.user)
    res.json(req.exp)
}

module.exports = {
    create,
    logIn,
    show,
    checkToken,
    updateScore
}