import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'

const AccountScreen = ({navigation}) => {
    return (
        <View>
            <Text style={{fontSize: 48}}>TrackDetailScreen</Text>
            <Button title="Go to Track List Screen"
                onPress={() => navigation.navigate('List')}/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default AccountScreen