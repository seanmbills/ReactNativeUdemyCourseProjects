import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'
import UseSearchResults from '../hooks/UseSearchResults'

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchYelpApi, searchResults, errorMessage] = UseSearchResults()
    
    return (
        <View>
            <SearchBar searchTerm={searchTerm}
                onTermChange={setSearchTerm}
                onSearchSubmit={() => searchYelpApi(searchTerm)}
            />
            <Text>We have found {searchResults.length} results!</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen