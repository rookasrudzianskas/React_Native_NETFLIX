import React from 'react';
import {View, Text, Image} from "react-native";
import styles from "./style";
import tw from "tailwind-react-native-classnames";

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
            </View>

            <Text style={tw`text-white`}>{episode.plot}</Text>
        </View>
    );
};

export default EpisodeItem;
