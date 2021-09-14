import React from 'react';
import {View, Text} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Episode} from "../../types";
import {Video} from "expo-av";

interface VideoPlayerProps {
    episode: Episode,
}

const VideoPlayer = (props: VideoPlayerProps) => {
    const {episode} = props;

    const handleVideoRef = (component) => {
        const playbackObject = component;

        const source = {
            uri: episode.video
        }

        playbackObject.loadAsync(
            source
        )
    }

    return (
        <View style={tw``}>
            <Video ref={handleVideoRef} />
        </View>
    );
};

export default VideoPlayer;
