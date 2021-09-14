import React, {useEffect, useRef, useState} from 'react';
import {View, Text} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Episode} from "../../types";
import {Video} from "expo-av";
import styles from "./style";
import {Playback} from "expo-av/build/AV";

interface VideoPlayerProps {
    episode: Episode,
}

const VideoPlayer = (props: VideoPlayerProps) => {
    const {episode} = props;

    // console.log(episode);

    const video = useRef<Playback>(null);
    const [status, setStatus] = useState({});

    useEffect(() => {
        if(!video) {
            return;
        }

        (async () => {
            await video?.current?.unloadAsync();
            await video?.current?.loadAsync(
                { uri: episode.video },
                {},
                false
                );
        })();
    }, [episode]);


    return (
        <View style={tw``}>
            <Video
    // @ts-ignore
                ref={video}
                style={styles.video}
                source={{
                    uri: episode.video,
                }}
                posterSource={{
                    uri: episode.poster,
                }}
                usePoster={true}
                posterStyle={{
                    resizeMode: 'cover'
                }}
                useNativeControls
                resizeMode="contain"
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </View>
    );
};

export default VideoPlayer;
