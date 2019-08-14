import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

const TextInputScreen = () => {
    // const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    return (
        <View>
            {/* <Text style={{fontSize: 30, textAlign:"center"}}>Enter your name:</Text> */}
            <Text style={{fontSize: 30, textAlign:"center"}}>Enter your password:</Text>
            <TextInput style={styles.inputBox}
                autoCapitalize="none"
                autoCorrect={false}
                // value = {name}
                value = {password}
                // onChangeText = {(newText) => setName(newText)}
                onChangeText = {(newPass) => setPassword(newPass)}
            />
            {/* <Text style={{fontSize:20, textAlign:"center"}}>Hello there, {name}!</Text> */}
            { password.length < 5 ? <Text>Please enter a password longer than 5 characters.</Text> : null}
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