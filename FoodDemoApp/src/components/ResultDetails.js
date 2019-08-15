import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const ResultDetails = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.images} source={{ uri: result.image_url }} />
            <Text style={styles.locationName}>{result.name}</Text> 
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
    },
    images: {
        height: 250,
        width: 250,
        borderRadius: 4,
        marginBottom: 5
    },
    locationName: {
        fontWeight: 'bold',
    }
})

export default ResultDetails