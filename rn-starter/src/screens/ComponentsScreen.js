import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    // const greeting = "Hello, world!";
    // const statement = <Text style = {styles.textStyle}>This is the components screen.</Text>;

    // return (
    //     <View>
    //         {statement}
    //         <Text>{greeting}</Text>
    //     </View>
    // );

    const myName = "Sean";
    return (
        <View>
            <Text style = { {fontSize: 45}}>Getting started with React Native!</Text>
            <Text style = {styles.textStyle}>My name is {myName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
    }
});

export default ComponentsScreen;