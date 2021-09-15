import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import styles from "../../screens/HomeScreen/styles";
import {useNavigation} from "@react-navigation/native";
import {Category, Movie} from "../../src/models";
import { DataStore } from 'aws-amplify';
import {Storage} from 'aws-amplify';

interface HomeCategoryProps {
    category: Category
}

const HomeCategory = (props: HomeCategoryProps) => {

    const {category} = props;

    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async() => {
            const result = (await DataStore.query(Movie)).filter((movie) => movie.categoryID === category.id)
            setMovies(result);
        }

        fetchMovies();
    }, []);

    const navigation = useNavigation();

    // @ts-ignore
    const onMoviePress = (movie: Movie) => {
        navigation.navigate('MovieDetailsScreen', {id: movie.id});
    }

    Storage.list('')
        .then(result => console.log(result))

    return (
            <View>
                <Text style={tw`text-white text-xl font-bold mt-1 mb-1`}>{category.title}</Text>
                {/*// @ts-ignore*/}
                <FlatList horizontal={true} showsVerticalScrollIndicator={false}  showsHorizontalScrollIndicator={false} data={movies} renderItem={({item}) => (
                    <View>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => onMoviePress(item)}>
                        {/*// @ts-ignore*/}
                            <Image style={[tw`m-2`, styles.image]} source={{ uri: item.poster }} />
                        </TouchableOpacity>
                    </View>
                )}/>
            </View>
    );
};

export default HomeCategory;
