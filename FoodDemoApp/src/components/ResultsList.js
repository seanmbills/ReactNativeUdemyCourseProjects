import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import ResultDetails from './ResultDetails';

const ResultsList = ({listName, results}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.listHeader}> {listName} </Text>
            <FlatList 
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return (
                        <ResultDetails result={item}/>
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
        marginLeft: 10,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
})

export default ResultsList