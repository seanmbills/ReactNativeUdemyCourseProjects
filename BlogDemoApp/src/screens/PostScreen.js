import React, {useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Context} from '../context/BlogContext'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {FontAwesome} from '@expo/vector-icons'

const PostScreen = ({navigation}) => {
    const {state} = useContext(Context)

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

    return (
        <View>
            <Text style={styles.header}>{blogPost.title}</Text>
            <Text style={styles.content}>{blogPost.content}</Text>
        </View>
    )
}

PostScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: (
            <TouchableOpacity
                onPress={() => navigation.navigate('Edit')}
            >
                <FontAwesome style={styles.icon} name='pencil' size={30}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    content: {
        margin: 20,
        fontSize: 18,
    },
    icon: {
        marginRight: 10,
    }
})

export default PostScreen