const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        // sets the type as a string
        type: String,
        // dictates that we cannot have duplicate emails
        unique: true,
        // can't create a user without an email
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// tells mongoose what schema to use for the User object
mongoose.model('User', userSchema)