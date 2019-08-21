import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Text, Button, Input} from 'react-native-elements'
import Spacer from '../components/Spacer'

const SignupScreen = ({navigation}) => {
    return (
        <>
            <View>
                {/* <Text style={{fontSize: 48}}>SignupScreen</Text>
                <Button title="Go to Signin" onPress={() => navigation.navigate('Signin')}/>
                <Button title="Go to Main flow" onPress={() => navigation.navigate('mainFlow')}/> */}
                <Spacer>
                    <Text h3>Sign Up for Tracker</Text>
                </Spacer>
                <Input label="Email"/>
                <Spacer />
                <Input label="Password"/>
                <Spacer>
                    <Button title="Sign Up"/>
                </Spacer>
            </View>
        </>
    )
}

const styles = StyleSheet.create({})

export default SignupScreen