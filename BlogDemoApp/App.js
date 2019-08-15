import React from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import IndexScreen from './src/screens/IndexScreen'
import { Provider } from './src/context/BlogContext'

const navigator = createStackNavigator({
    Index: IndexScreen,

}, {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
        title: 'Blogs',
    }
})

const App = createAppContainer(navigator)

// creating the beginnings of the blog post provider
export default () => {
    return (
        <Provider>
            <App />
        </Provider>
    )
}