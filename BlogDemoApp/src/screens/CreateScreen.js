import React, {useState, useContext} from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'
import {Context} from '../context/BlogContext'

const CreateScreen = ({navigation}) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const {addBlogPost} = useContext(Context)

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
                title="Add Blog Post" 
                onPress={() => {
                        addBlogPost(title, content, () => {
                            navigation.navigate('Index')
                        });
                    } 
                }
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

export default CreateScreen