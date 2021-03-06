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
      <Button title = "Go to Counter Demo" onPress = {() => navigation.navigate('Counter')}/>
      <Button title = "Go to Colors Demo" onPress = {() => navigation.navigate("Colors")} />
      <Button title = "Go to Color Adjuster Demo" onPress = {() => navigation.navigate("Adjuster")} />
      <Button title = "Go to Text Input Demo" onPress = {() => navigation.navigate("Input")} />
      <Button title = "Go to Box Style Demo" onPress = {() => navigation.navigate("Box")} />
      <Button title = "Go to Box Example Demo" onPress = {() => navigation.navigate("BoxDemo")} />
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
