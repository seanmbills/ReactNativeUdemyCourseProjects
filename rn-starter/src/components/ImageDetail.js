import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = ({imageSource, title, imageScore}) => {
    return (
    <View>
        <Text>{title} -- Score: {imageScore}</Text>
        <Image source={imageSource} />
    </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;