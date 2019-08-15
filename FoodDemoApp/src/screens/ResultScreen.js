import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import yelp from '../api/yelp'

const ResultScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    const [result, setResult] = useState(null)

    console.log(result)

    const getBusinessInfo = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getBusinessInfo(id)
    }, [])

    if (!result) {
        return null
    }

    return (
        <View>
            {/* <Text>{result.name}</Text> */}
            <FlatList data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return (
                        <Image style={styles.locationImages} source={{uri: item}}/> 
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    locationImages: {
        height: 250,
        width: 250,
        borderRadius: 10,

    }
})

export default ResultScreen