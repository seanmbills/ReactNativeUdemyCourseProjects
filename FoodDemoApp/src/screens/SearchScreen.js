import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp'


const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setResults] = useState([])

    const searchYelpApi = async () => {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'atlanta'
            }
        });
        setResults(response.data.businesses)
    }    

    return (
        <View>
            <SearchBar searchTerm={searchTerm}
                onTermChange={setSearchTerm}
                onSearchSubmit={searchYelpApi}
            />
            <Text>We have found {searchResults.length} results!</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen