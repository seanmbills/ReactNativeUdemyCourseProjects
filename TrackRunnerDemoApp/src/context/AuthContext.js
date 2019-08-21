import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const authReducer = (state, action) => {
    switch(action.type){
        default: 
            return state
    }
}

const signup = (dispatch) => {
    return ({email, password}) => {
        // make api request to sign up with this email and password

        // if we sign up, probably want to modify state and say we are authenticated

        // if signing up fails, we probably need to reflect an error message somewhere
    }
}

const signin = (dispatch) => {
    return ({email, password}) => {
        // make api request to sign in with given email and password

        // handle success by updating state

        // handle error by showing error message somehow
    }
}

const signout = (dispatch) => {
    return () => {
        // just need to sign out (revoke authorization of token?)
    }
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signup, signout},
    {isSignedIn: false}
)