import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Feather } from '@expo/vector-icons'

const SearchBar = () => {
    return (
        <View style = {styles.searchView}>
            <Feather name="search" size={30}/>
            <TextInput />
        </View>
    )
}

const styles = StyleSheet.create({
    searchView: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        margin: 15,

    }
})

export default SearchBar