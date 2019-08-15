import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import { Directions } from 'react-native-gesture-handler';

const BoxScreen = () => {
    return (
        <View style = {styles.viewStyle}>
            <Text style = {styles.textStyle}>Child 1</Text>
            <Text style = {styles.textStyle}>Child 2</Text>
            <Text style = {styles.textStyle}>Child 3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    // the View here is the "parent" element
    viewStyle: {
        borderWidth: 2,
        borderColor: 'black',
        // default of alignItems is 'stretch'
        // alignItems: 'center',
        // alignItems: 'flex-end',
        // alignItems: 'flex-start',
        
        // default for flexDirection is "column", so setting it to this is uncommon
        // flexDirection: 'row',

        //default for justifyContent is 'flex-start' which puts things at top/start of view
        // options include 'flex-start', 'center', 'space-between', 'space-around', etc.
        justifyContent: 'center',
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20,
        // margin: 20,

    },

})

export default BoxScreen