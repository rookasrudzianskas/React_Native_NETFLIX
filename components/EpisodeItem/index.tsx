import React from 'react';
import {View, Text, Image} from "react-native";
import styles from "./style";
import tw from "tailwind-react-native-classnames";
import {Ionicons} from "@expo/vector-icons";

interface EpisodeItemProps {
    episode: {
        id: string,
        title: string,
        poster: string,
        duration: string,
        plot: string,
        video: string,
    }
}

const EpisodeItem = (props: EpisodeItemProps) => {

    const {episode} = props;

    return (
        <View style={styles.container}>
            <View style={tw`flex flex-row items-center`}>
                <Image style={styles.image} source={{ uri: episode.poster }} />

                <View style={tw`flex flex-1 ml-3`}>
                    <Text style={tw`text-gray-100`}>{episode.title}</Text>
                    <Text style={tw`text-gray-500`}>{episode.duration}</Text>
                </View>

                <Ionicons style={tw`mr-2`} name="ios-download-outline" size={22} color="white" />

            </View>

            <Text style={tw`text-gray-300 mt-3`}>{episode.plot}</Text>
        </View>
    );
};

export default EpisodeItem;
