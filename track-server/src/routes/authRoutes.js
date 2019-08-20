const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = mongoose.model('User')

const router = express.Router()

router.post('/signup', async (req, res) => {
    // gets the username and password entered in
    const {email, password} = req.body
    try {
        // creates a new user instance with passed in info
        const user = new User({email, password})
        // saves the user/submits it to the MongoDB instance
        await user.save()
        
        // creates new jwt web token for authorization
        const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY')
        res.send({token})
    } catch(err) {
        return res.status(422).send(err.message)
    }  
})

router.post('/signin', async (req, res) => {
    const {email, password} = req.body
    if (!email || !password) {
        return res.status(422).send({error: "Must provide email and password"})
    }

    const user = await User.findOne({email})
    if (!user) {
        return res.status(401).send({error: "Invalid email or password"})
    }

    try {
        await user.comparePassword(password)

        const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY')
        res.send({token})
    } catch(err) {
        return res.status(401).send({error: "Invalid email or password"})
    }
})

module.exports = router