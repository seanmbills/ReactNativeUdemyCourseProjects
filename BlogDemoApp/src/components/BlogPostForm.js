import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'

const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)
    return (
        <View>
            <Text style={styles.header}>Enter Title of Blog Post:</Text>
            <TextInput 
                style={styles.inputFields} 
                value={title} 
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.header}>Enter Content of Blog Post:</Text>
            <TextInput 
                multiline
                numberOfLines={3}
                style={styles.inputFields}
                value={content}
                onChangeText={(newContent) => setContent(newContent)}
            />
            <Button 
                title="Save Blog Post" 
                onPress={() => onSubmit(title, content)}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    inputFields: {
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 18,
        marginBottom: 15,
        padding: 10,
        margin: 5,
    },
    header: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
})

export default BlogPostForm