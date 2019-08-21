import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'

const TrackListScreen = ({navigation}) => {
    return (
        <View>
            <Text style={{fontSize: 48}}>TrackListScreen</Text>
            <Button title="Go to Track Detail Screen"
                onPress={() => navigation.navigate('Detail')}/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default TrackListScreen