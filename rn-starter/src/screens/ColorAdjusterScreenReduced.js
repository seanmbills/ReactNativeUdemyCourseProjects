import React, {useReducer} from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const DELTA = 10;

// state: the state to update
// action: the way in which we're changing the state object
const reducer = (state, action) => {
    // state == { red: __, green: __, blue: __ }
    // action == { colorToChange: 'red/green/blue', amountToChangeBy: +DELTA/-DELTA }
    switch(action.colorToChange) {
        case 'red':
            if (state.red + action.amount > 255) {
                return {...state, red: 255};
            } else if (state.red + action.amount < 0) {
                return {...state, red: 0};
            } else {
                return {...state, red: state.red + action.amount};
            }
        case 'blue':
            if (state.blue + action.amount > 255) {
                return {...state, blue: 255};
            } else if (state.blue + action.amount < 0) {
                return {...state, blue: 0};
            } else {
                return {...state, blue: state.blue + action.amount};
            }
        case 'green':
            if (state.green + action.amount > 255) {
                return {...state, green: 255};
            } else if (state.green + action.amount < 0) {
                return {...state, green: 0};
            } else {
                return {...state, green: state.green + action.amount};
            }
        default:
            return;
    }
};

const ColorAdjusterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 122, green: 122, blue: 122});
    const {red, green, blue } = state;

    return (
        <View>
            <ColorCounter colorName = 'Red' 
                onIncrement = {() => dispatch({colorToChange:'red', amount:DELTA})}
                onDecrement = {() => dispatch({colorToChange:'red', amount:DELTA * -1})}
            />
            <Text>Red Value: {red}</Text>
            <ColorCounter colorName = 'Green' 
                onIncrement = {() => dispatch({colorToChange:'green', amount:DELTA})}
                onDecrement = {() => dispatch({colorToChange:'green', amount:DELTA * -1})}
            />
            <Text>Green Value: {green}</Text>
            <ColorCounter colorName = 'Blue' 
                onIncrement = {() => dispatch({colorToChange:'blue', amount:DELTA})}
                onDecrement = {() => dispatch({colorToChange:'blue', amount:DELTA * -1})}
            />
            <Text>Blue Value: {blue}</Text>
            
            <View style = {[styles.coloredSquare,
                {backgroundColor:
                    `rgb(${red}, ${green}, ${blue})`}
                ]}/>
        </View>
    );
};

const styles = StyleSheet.create({
    coloredSquare: {
        width: 150,
        height: 150,
        alignSelf: "center",
        borderColor:"rgb(0,0,0)",
        borderWidth:3,

    }
});

export default ColorAdjusterScreen;