const express = require('express')
const mongoose = require('mongoose')
const requireAuth = require('../middlewares/requireAuth')

const Track = mongoose.model('Track')

const router = express.Router()

// ensure that all things we use require the user to be signed in first
router.use(requireAuth)

router.get('/tracks', async (req, res) => {
    // gets all tracks associated with this user
    const tracks = await Track.find({userId: req.user._id})

    // sends all of the user's tracks back in an array
    res.send(tracks)
})

router.post('/tracks', async (req, res) => {
    const {name, locations} = req.body
    if (!name || ! locations) {
        return res
            .status(422)
            .send({error: 'You must provide a valid name and set of locations to form a track.'})
    }

    try {
        const track = Track({name, locations, userId: req.user._id})
        await track.save()

        res.send(track)
    } catch(err) {
        res.status(422).send({error: err.message })
    }
    
})

module.exports = router