import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Text, Button, Input} from 'react-native-elements'
import Spacer from '../components/Spacer'

const SignupScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3 style={{textAlign: 'center'}}>Sign Up for Tracker</Text>
            </Spacer>
            <Input label="Email"/>
            <Spacer />
            <Input label="Password"/>
            <Spacer>
                <Button title="Sign Up"/>
            </Spacer>
        </View>
    )
}

SignupScreen.navigationOptions = () => {
    return {
        header: null
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        marginBottom: 150
    }
})

export default SignupScreen