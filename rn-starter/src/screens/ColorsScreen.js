import React, {useState} from 'react';
import {Button, View, StyleSheet, FlatList} from 'react-native';

const ColorsScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button title = "Add a Color" onPress = { () => {
                setColors([...colors, randomRGB()]);
            }}/>
            
            <FlatList data = {colors} renderItem = {({item}) => {
                    return <View style = {{height: 100, width: 100, backgroundColor: item}} />
                }}
                keyExtractor = {(item) => item}
            />
        </View>
    );
};

const randomRGB = () => {
    const red = Math.ceil(Math.random() * 256) - 1;
    const green = Math.ceil(Math.random() * 256) - 1;
    const blue = Math.ceil(Math.random() * 256) - 1;

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});

export default ColorsScreen;