import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        // method 1 of key designation
        // { name: 'Friend 1', key: '1'},
        // { name: 'Friend 2', key: '2'},
        // { name: 'Friend 3', key: '3'},
        // { name: 'Friend 4', key: '4'},
        // { name: 'Friend 5', key: '5'},
        // { name: 'Friend 6', key: '6'},
        // { name: 'Friend 7', key: '7'},
        // { name: 'Friend 8', key: '8'},
        // { name: 'Friend 9', key: '9'},

        // method 2 of key designation below
        { name: 'Friend 1'},
        { name: 'Friend 2'},
        { name: 'Friend 3'},
        { name: 'Friend 4'},
        { name: 'Friend 5'},
        { name: 'Friend 6'},
        { name: 'Friend 7'},
        { name: 'Friend 8'},
        { name: 'Friend 9'},
    ];

    const friendsWithAges = [
        { name: 'Friend 1', age: 1},
        { name: 'Friend 2', age: 2},
        { name: 'Friend 3', age: 3},
        { name: 'Friend 4', age: 4},
        { name: 'Friend 5', age: 5},
        { name: 'Friend 6', age: 6},
        { name: 'Friend 7', age: 7},
        { name: 'Friend 8', age: 8},
        { name: 'Friend 9', age: 9},
    ];


    return (
        <FlatList
            // horizontal
            // showsHorizontalScrollIndicator={false}
            keyExtractor = {(friend) => friend.name}
            data = {friendsWithAges}
            renderItem = {({item}) => {
                return <Text style = {styles.lineItem}>Name:{item.name} - Age:{item.age}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    lineItem: {
        marginVertical: 50,
    }
});

export default ListScreen;