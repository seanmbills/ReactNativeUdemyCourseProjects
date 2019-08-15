import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'
import UseSearchResults from '../hooks/UseSearchResults'
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchYelpApi, searchResults, errorMessage] = UseSearchResults()
    
    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return searchResults.filter(result => {return result.price === price})
    }

    return (
        <View>
            <SearchBar searchTerm={searchTerm}
                onTermChange={setSearchTerm}
                onSearchSubmit={() => searchYelpApi(searchTerm)}
            />
            <Text>We have found {searchResults.length} results!</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ResultsList results={filterResultsByPrice('$')} listName="Cost Effective" />
            <ResultsList results={filterResultsByPrice('$$')} listName="More Expensive" />
            <ResultsList results={filterResultsByPrice('$$$')} listName="Big Spender!" />
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen