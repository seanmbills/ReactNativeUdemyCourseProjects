import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hello, world!</Text>
      <Button 
        title = "Go to Components Demo"
        onPress = {() => navigation.navigate("Components")}
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
      <Button title = "Go to List Demo" onPress = {() => navigation.navigate("List")}/>
      <Button title = "Go to Image Demo" onPress = {() => navigation.navigate("Image")} />
      <Button title = "Got to Counter Demo" onPress = {() => navigation.navigate('Counter')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign:"center",
  }
});

export default HomeScreen;
