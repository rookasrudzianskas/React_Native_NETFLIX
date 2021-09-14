import React from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./style";
import tw from "tailwind-react-native-classnames";
import {Ionicons} from "@expo/vector-icons";
import {Episode} from "../../types";

interface EpisodeItemProps {
    episode: Episode,
    onPress: (episode: Episode) => {},
}

const EpisodeItem = (props: EpisodeItemProps) => {

    const {episode, onPress} = props;

    return (
        <TouchableOpacity onPress={() => onPress(episode)} activeOpacity={0.8} style={styles.container}>
            <View style={tw`flex flex-row items-center`}>
                <Image style={styles.image} source={{ uri: episode.poster }} />

                <View style={tw`flex flex-1 ml-3`}>
                    <Text style={tw`text-gray-100`}>{episode.title}</Text>
                    <Text style={tw`text-gray-500`}>{episode.duration}</Text>
                </View>

                <Ionicons style={tw`mr-2`} name="ios-download-outline" size={22} color="white" />

            </View>

            <Text style={tw`text-gray-300 mt-3`}>{episode.plot}</Text>
        </TouchableOpacity>
    );
};

export default EpisodeItem;
