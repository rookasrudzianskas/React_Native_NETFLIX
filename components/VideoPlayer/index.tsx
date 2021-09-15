import React, {useEffect, useRef, useState} from 'react';
import {View, Text} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Episode} from "../../types";
import {Video} from "expo-av";
import styles from "./style";
import {Playback} from "expo-av/build/AV";
import {Storage} from 'aws-amplify';

interface VideoPlayerProps {
    episode: Episode,
}

const VideoPlayer = (props: VideoPlayerProps) => {
    const {episode} = props;

    // console.log(episode);

    const video = useRef<Playback>(null);
    const [status, setStatus] = useState({});
    const [videoURL, setVideoURL] = useState('');

    useEffect(() => {
        if (!video) {
            return;
        }
        (async () => {
            await video?.current?.unloadAsync();
            await video?.current?.loadAsync(
                { uri: videoURL },
                {},
                false
            );
        })();
    }, [videoURL])


    useEffect(() => {
        if(episode?.video?.startsWith('http')) {
            setVideoURL(episode.video);
        }
        // @ts-ignore
        Storage.get(episode.video).then(setVideoURL);
    }, [episode]);

    // console.log(videoURL);

    if(videoURL === '') {
        return null;
    }


    return (
        <View style={tw``}>
            <Video
    // @ts-ignore
                ref={video}
                style={styles.video}
                source={{
                    uri: videoURL,
                }}
                posterSource={{
                    uri: episode.poster,
                }}
    // @ts-ignore
                usePoster={!status || status?.isPlaying}
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
