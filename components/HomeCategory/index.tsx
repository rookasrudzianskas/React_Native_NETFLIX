import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import styles from "../../screens/HomeScreen/styles";
import {useNavigation} from "@react-navigation/native";
import {Category, Movie} from "../../src/models";
import { DataStore } from 'aws-amplify';
import {Storage} from 'aws-amplify';
import MovieItem from "../MovieItem";

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




    // storage
    Storage.list('asia-culturecenter-YgFUJ4Ef2EY-unsplash.jpg')
        .then(result => console.log(result));

    return (
            <View>
                <Text style={tw`text-white text-xl font-bold mt-1 mb-1`}>{category.title}</Text>
                {/*// @ts-ignore*/}
                <FlatList horizontal={true} showsVerticalScrollIndicator={false}  showsHorizontalScrollIndicator={false} data={movies} renderItem={({item}) => (
                    <View>
                       <MovieItem movie={item} />
                    </View>
                )}/>
            </View>
    );
};

export default HomeCategory;
