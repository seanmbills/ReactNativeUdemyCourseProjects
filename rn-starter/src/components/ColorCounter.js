import React, {useState} from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';

const ColorCounter = ({colorName, onIncrement, onDecrement}) => {
    return (
        <View>
            <Text style = {styles.headers}>{colorName}</Text>
            <Button title = {`Increase ${colorName}`} onPress= {() => onIncrement()}/>
            <Button title = {`Decrease ${colorName}`} onPress= {() => onDecrement()}/>
        </View>
    );
};

const styles = StyleSheet.create({
    headers: {
        fontSize:30,
    }
});

export default ColorCounter;