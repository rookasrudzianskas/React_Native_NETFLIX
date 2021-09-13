import React from 'react';
import {View, Text, Image} from "react-native";
import styles from "./style";
import movie from "../../assets/data/movie";
import tw from "tailwind-react-native-classnames";
import {MaterialIcons} from "@expo/vector-icons";

const firstEpisode = movie.seasons.items[0].episodes.items[0];


const MovieDetailsScreen = () => {
    console.log(firstEpisode)
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: firstEpisode.poster }} />

            <View  style={tw`text-white`}>
                <Text style={tw`text-white text-3xl mx-2 font-bold mt-3 mb-3`}>{movie.title}</Text>
            </View>

            <View style={tw`flex flex-row mx-2 items-center`}>
                <Text style={tw`text-green-500 font-bold`}>98% match</Text>
                <Text style={tw`text-gray-500 ml-5`}>{movie?.year}</Text>
                <View style={tw`ml-3 bg-yellow-300 items-center justify-center px-2 py-1 rounded-md`}>
                    <Text style={tw`text-gray-900 font-bold`}>12+</Text>
                </View>

                <Text style={tw`text-gray-500 ml-3 mr-3`}>{movie?.numberOfSeasons} seasons</Text>

                <View style={tw``}>
                    <MaterialIcons name="hd" size={27} color="gray" />
                </View>
            </View>
        </View>
    );
};

export default MovieDetailsScreen;
