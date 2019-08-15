import React, {useContext} from 'react'
import {View, Text, StyleSheet, FlatList, Button} from 'react-native'
import {Context} from '../context/BlogContext'
import {Feather} from '@expo/vector-icons'

const IndexScreen = () => {
    const {state, addBlogPost} = useContext(Context)
    
    return (
        <View>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return (
                        <View style={styles.blogListItem}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Feather style={styles.trashIcon} name="trash-2"/>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    blogListItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 18,

    },
    trashIcon: {
        fontSize: 28
    }
})

export default IndexScreen