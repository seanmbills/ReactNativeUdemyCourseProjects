import React, {useState} from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const DELTA = 10;

const ColorAdjusterScreen = () => {
    const [redVal, setRed] = useState(122);
    const [greenVal, setGreen] = useState(122);
    const [blueVal, setBlue] = useState(122);

    const setColor = (color, delta) => {
        // color == 'red', 'green', or 'blue'
        // delta == either +DELTA, or -DELTA
        switch (color) {
            case 'red':
                if (redVal + delta > 255) {
                    setRed(255);
                } else if (redVal + delta < 0) {
                    setRed(0);
                } else {
                    setRed(redVal + delta);
                }
                break;
            case 'green':
                if (greenVal + delta > 255) {
                    setGreen(255);
                } else if (greenVal + delta < 0) {
                    setGreen(0);
                } else {
                    setGreen(greenVal + delta);
                }
                break;
            case 'blue':
                if (blueVal + delta > 255) {
                    setBlue(255);
                } else if (blueVal + delta < 0) {
                    setBlue(0);
                } else {
                    setBlue(blueVal + delta);
                }
                break;
            default:
                return;
        }
    };

    return (
        <View>
            <ColorCounter colorName = 'Red' 
                onIncrement = {() => setColor('red', DELTA)}
                onDecrement = {() => setColor('red', (DELTA * -1))}
            />
            <Text>Red Value: {redVal}</Text>
            <ColorCounter colorName = 'Green' 
                onIncrement = {() => setColor('green', DELTA)}
                onDecrement = {() => setColor('green', (DELTA * -1))}
            />
            <Text>Green Value: {greenVal}</Text>
            <ColorCounter colorName = 'Blue' 
                onIncrement = {() => setColor('blue', DELTA)}
                onDecrement = {() => setColor('blue', (DELTA * -1))}
            />
            <Text>Blue Value: {blueVal}</Text>
            
            <View style = {[styles.coloredSquare,
                {backgroundColor:
                    `rgb(${redVal}, ${greenVal}, ${blueVal})`}
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