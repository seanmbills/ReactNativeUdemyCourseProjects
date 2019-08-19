import React from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import IndexScreen from './src/screens/IndexScreen'
import { Provider } from './src/context/BlogContext'
import PostScreen from './src/screens/PostScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const navigator = createStackNavigator({
    Index: IndexScreen,
    Post: PostScreen,
    Create: CreateScreen,
    Edit: EditScreen,
    
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