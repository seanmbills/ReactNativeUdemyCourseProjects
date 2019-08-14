import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

const TextInputScreen = () => {
    const [name, setName] = useState("")
    
    return (
        <View>
            <Text style={{fontSize: 30, textAlign:"center"}}>Enter your name:</Text>
            <TextInput style={styles.inputBox}
                autoCapitalize="none"
                autoCorrect={false}
                value = {name}
                onChangeText = {(newText) => setName(newText)}
            />
            <Text style={{fontSize:20, textAlign:"center"}}>Hello there, {name}!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: "grey",
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        textAlign: "center",
        fontSize: 20,
        height: 100,
        textAlignVertical:"center",
    }
});

export default TextInputScreen