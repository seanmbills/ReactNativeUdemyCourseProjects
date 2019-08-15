import React, {useState, useEffect} from 'react'
import yelp from '../api/yelp'

export default () => {
    const [searchResults, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchYelpApi = async (search) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: search,
                    location: 'atlanta'
                }
            });
            setResults(response.data.businesses)
        } catch (error) {
            setErrorMessage('Something went wrong. Please try again.')
        }
    }    

    /* prevents us from hitting an infinite loop of calling search 
        yelp api and continuously re-rendering our screen, forcing
        us to run search yelp api over and over
    */
    useEffect(() => {
        searchYelpApi('brewery')
    }, []) // <-- use of the empty brackets here helps us to only run this on original rendering of the screen

    return [searchYelpApi, searchResults, errorMessage]
}