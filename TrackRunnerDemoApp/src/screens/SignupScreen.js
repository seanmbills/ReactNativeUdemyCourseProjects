import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Text, Button, Input} from 'react-native-elements'

const SignupScreen = ({navigation}) => {
    return (
        <View>
            {/* <Text style={{fontSize: 48}}>SignupScreen</Text>
            <Button title="Go to Signin" onPress={() => navigation.navigate('Signin')}/>
            <Button title="Go to Main flow" onPress={() => navigation.navigate('mainFlow')}/> */}
            <Text h3>Sign Up for Tracker</Text>
            <Input label="Email"/>
            <Input label="Password"/>
            <Button title="Sign Up"/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SignupScreen