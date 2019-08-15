import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import ResultDetails from './ResultDetails';

const ResultsList = ({listName, results, navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.listHeader}> {listName} </Text>
            <FlatList 
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("Result")}>
                            <ResultDetails result={item}/>
                        </TouchableOpacity>
                    )
                }}
                showsHorizontalScrollIndicator={false}
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