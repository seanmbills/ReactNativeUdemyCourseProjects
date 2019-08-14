import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hello, world!</Text>
      <Button 
        title = "Go to Components Demo"
        onPress = {() => props.navigation.navigate("Components")}
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
      <Button title = "Go to List Demo" onPress = {() => props.navigation.navigate("List")}/>
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
