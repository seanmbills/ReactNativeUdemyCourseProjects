import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const ResultScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    console.log(id)
    return (
        <View>
            <Text>
                Result Screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ResultScreen