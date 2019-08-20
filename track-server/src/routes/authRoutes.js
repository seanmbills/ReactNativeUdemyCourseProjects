const express = require('express')
const mongoose = require('mongoose')
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
        res.send('You made a post request')
    } catch(err) {
        return res.status(422).send(err.message)
    }
    
})

module.exports = router