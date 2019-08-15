import React from 'react'
import {createStackNavigator, createAppContainer } from 'react-navigation'
import SearchScreen from './src/screens/SearchScreen';
import ResultScreen from './src/screens/ResultScreen';

const navigator = createStackNavigator({
    Search: SearchScreen,
    Result: ResultScreen,
    
}, {
    initialRouteName: "Search",
    defaultNavigationOptions: {
        title: "Business Search",
    }
})

export default createAppContainer(navigator)