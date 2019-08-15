import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import { Directions } from 'react-native-gesture-handler';

/*
    values assigned to parent elements to control how 
        child values are styled from a Flex perspective:
        1) alignItems
        2) justifyContent
        3) flexDirection
        4)
    values assigned to children to control their own flex
        styling:
        1) flex
        2) alignSelf
        3) etc.

    alignSelf lets you override flex settings on the parent
*/

const BoxScreen = () => {
    return (
        <View style = {styles.viewStyle}>
            <Text style = {styles.textStyle1}>Child 1</Text>
            <Text style = {styles.textStyle2}>Child 2</Text>
            <Text style = {styles.textStyle3}>Child 3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    // the View here is the "parent" element
    viewStyle: {
        borderWidth: 2,
        borderColor: 'black',
        height: 200,
        alignItems: 'stretch'
        // default of alignItems is 'stretch'
        // alignItems: 'center',
        // alignItems: 'flex-end',
        // alignItems: 'flex-start',
        
        // default for flexDirection is "column", so setting it to this is uncommon
        // flexDirection: 'row',

        //default for justifyContent is 'flex-start' which puts things at top/start of view
        // options include 'flex-start', 'center', 'space-between', 'space-around', etc.
        // justifyContent: 'center',
    },
    textStyle1: {
        borderWidth: 3,
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20,
        // margin: 20,
        // flex: 4, 

    },
    textStyle2: {
        borderWidth: 3,
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20,
        // margin: 20,
        // flex: 4,
        // alignSelf: 'stretch'
        // position: 'absolute',
        ...StyleSheet.absoluteFillObject,
        
    },
    textStyle3: {
        borderWidth: 3,
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20,
        // margin: 20,
        // flex: 1,

    },

})

export default BoxScreen