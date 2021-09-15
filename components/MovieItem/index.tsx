import React from 'react';
import {View, Text, TouchableOpacity, Image} from "react-native";
import tw from "tailwind-react-native-classnames";
import styles from "./style";
import {Movie} from "../../src/models";
import {useNavigation} from "@react-navigation/native";

const MovieItem = ({ movie } : {movie: Movie}) => {
    const navigation = useNavigation();

    // @ts-ignore
    const onMoviePress = () => {
        navigation.navigate('MovieDetailsScreen', {id: movie.id});
    }

    return (
        <View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => onMoviePress}>
                {/*// @ts-ignore*/}
                <Image style={[tw`m-2`, styles.image]} source={{ uri: movie?.poster }} />
            </TouchableOpacity>
        </View>
    );
};

export default MovieItem;
