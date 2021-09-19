import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from "react-native";
import tw from "tailwind-react-native-classnames";
import styles from "./style";
import {Movie} from "../../src/models";
import {useNavigation} from "@react-navigation/native";
import {Storage} from "aws-amplify";

const MovieItem = ({ movie } : {movie: Movie}) => {
    const navigation = useNavigation();
    const [imageUrl, setImageUrl] = useState('');

    // @ts-ignore
    const onMoviePress = () => {
        // check if user is pro

        // redirect to the details screen
        navigation.navigate('MovieDetailsScreen', {id: movie.id});

        // otherwise redirect to the paywall.
    }

    useEffect(() => {
        // storage
        // console.log(movie.poster);
        if(movie.poster.startsWith('http')) {
            setImageUrl(movie.poster);
            return;
        }
        // @ts-ignore
        Storage.get(movie.poster).then(setImageUrl);
    }, []);

    return (
        <View>
            <TouchableOpacity activeOpacity={0.8} onPress={onMoviePress}>
                {/*// @ts-ignore*/}
                <Image style={[tw`m-2`, styles.image]} source={{ uri: imageUrl || movie?.poster }} />
            </TouchableOpacity>
        </View>
    );
};

export default MovieItem;
