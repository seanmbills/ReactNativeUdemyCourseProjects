const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = (req, res, next) => {
    const {authorization} = req.headers
    // authorization === 'Bearer ____________________________________'
    // need to strip out 'Bearer ' later

    // check that th user provided a token in the first place
    if (!authorization) {
        return res.status(401).send({ error: 'You must be logged in!'})
    }

    // check that the user provided a valid auth token
    // strips out the preceding 'Bearer '
    const token = authorization.replace('Bearer ', '')
    jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
        // check to see if an error occurred during verification
        if (err) {
            return res.status(401).send({error: 'You must be logged in!'})
        }

        // else pull out the userId and find the appropriate user in our database
        const {userId} = payload;
        const user = await User.findById(userId)
        
        // assign in the request, so that other requests can make use of the user info
        req.user = user
        next()
    })
}