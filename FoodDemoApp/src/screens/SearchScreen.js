import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import UseSearchResults from '../hooks/UseSearchResults'
import ResultsList from '../components/ResultsList';

const SearchScreen = ({navigation}) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchYelpApi, searchResults, errorMessage] = UseSearchResults()
    
    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return searchResults.filter(result => {return result.price === price})
    }

    return (
        <View style={{flex:1}}>
            <SearchBar searchTerm={searchTerm}
                onTermChange={setSearchTerm}
                onSearchSubmit={() => searchYelpApi(searchTerm)}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                {errorMessage ? <Text>{errorMessage}</Text> : null}
                <ResultsList results={filterResultsByPrice('$')} listName="Cost Effective" navigation={navigation}/>
                <ResultsList results={filterResultsByPrice('$$')} listName="More Expensive" navigation={navigation}/>
                <ResultsList results={filterResultsByPrice('$$$')} listName="Big Spender!" navigation={navigation}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen