import React from 'react';
import {View, Text, Image} from "react-native";
import styles from "./style";
import movie from "../../assets/data/movie";
import tw from "tailwind-react-native-classnames";

const firstEpisode = movie.seasons.items[0].episodes.items[0];


const MovieDetailsScreen = () => {
    console.log(firstEpisode)
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: firstEpisode.poster }} />

            <View  style={tw``}>
                <Text style={tw``}>{movie.title}</Text>
            </View>

            <View>
                <Text style={tw``}>98% match</Text>
                <View>
                    <Text style={tw``}>12+</Text>
                </View>
                <Text style={tw``}>{movie?.year}</Text>
            </View>
        </View>
    );
};

export default MovieDetailsScreen;
