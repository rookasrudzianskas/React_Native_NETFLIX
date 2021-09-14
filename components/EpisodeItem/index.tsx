import React from 'react';
import {View, Text} from "react-native";
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
    return (
        <View style={styles.container}>
            <Text style={tw`text-white`}>Rokas</Text>
        </View>
    );
};

export default EpisodeItem;
