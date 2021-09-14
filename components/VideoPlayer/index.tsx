import React, {useRef, useState} from 'react';
import {View, Text} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Episode} from "../../types";
import {Video} from "expo-av";
import styles from "./style";

interface VideoPlayerProps {
    episode: Episode,
}

const VideoPlayer = (props: VideoPlayerProps) => {
    const {episode} = props;

    const video = useRef(null);
    const [status, setStatus] = useState({});



    return (
        <View style={tw``}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: episode.video,
                }}
                useNativeControls
                resizeMode="contain"
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </View>
    );
};

export default VideoPlayer;
