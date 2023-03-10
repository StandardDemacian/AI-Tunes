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

async function create(req, res) {
    // just for right now I want to see if this is connected
    const user = await User.create(req.body)
    console.log(user)
    try {
        await user.save()
        const token = createJWT(user)
        res.json(token)
    } catch (error) {
        res.status(400).json(error)
    }
}

async function login(req, res) {
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


function checkToken(req, res) {
    res.json(req.exp)
}

module.exports = {
    create,
    login,
    checkToken
}