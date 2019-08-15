import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

const ResultsList = ({listName, results}) => {
    return (
        <View>
            <Text style={styles.listHeader}> {listName} </Text>
            <FlatList 
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return (
                        <Text>{item.name}</Text>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listHeader: {
        fontSize: 22,
        fontWeight: "bold",

    }
})

export default ResultsList