const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

// pre-save hook: function that runs before saving instance of user in database
userSchema.pre('save', function(next) {
    const user = this
    // if user hasn't modified password in any way, don't salt anything
    if (!user.isModified('password')) {
        return next()
    }
    // 10 digit salt
    bcrypt.genSalt(10, (err, salt) => {
        // if error generating salt, break out
        if (err) {
            return next(err)
        }
        // else hash the password and reset user password to the hash
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err)
            }
            user.password = hash
            next()
        })
    })
})

userSchema.methods.comparePassword = function(enteredPassword) {
    const user = this
    return new Promise((resolve, reject) => {
        bcrypt.compare(enteredPassword, user.password, (err, isMatch) => {
            if (err) {
                return reject(err)
            }

            if (!isMatch) {
                return reject(false)
            }

            resolve(true)
        })
    })
}

// tells mongoose what schema to use for the User object
mongoose.model('User', userSchema)