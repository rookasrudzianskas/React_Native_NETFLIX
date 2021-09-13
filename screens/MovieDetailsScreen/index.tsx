import React from 'react';
import {View, Text, Image} from "react-native";
import styles from "./style";
import movie from "../../assets/data/movie";

const firstEpisode = movie.seasons.items[0].episodes.items[0];


const MovieDetailsScreen = () => {
    console.log(firstEpisode)
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/ep0.jpg'}} />
        </View>
    );
};

export default MovieDetailsScreen;
