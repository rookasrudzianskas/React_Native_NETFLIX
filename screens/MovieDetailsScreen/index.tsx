import React from 'react';
import {View, Text, Image} from "react-native";
import styles from "./style";

const MovieDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/ep0.jpg'}} />
        </View>
    );
};

export default MovieDetailsScreen;
