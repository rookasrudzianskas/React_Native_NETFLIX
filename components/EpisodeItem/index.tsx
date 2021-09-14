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
            <View style={tw``}>
                <Image style={styles.image} source={{ uri: episode.poster }} />

                <View style={tw``}>
                    <Text style={tw``}>{episode.title}</Text>
                    <Text style={tw``}>{episode.duration}</Text>
                </View>

                <Ionicons style={tw`mr-2`} name="ios-download-outline" size={22} color="white" />

            </View>

            <Text style={tw`text-white`}>{episode.plot}</Text>
        </View>
    );
};

export default EpisodeItem;
