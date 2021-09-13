import * as React from 'react';

import {Text, View, Image, SafeAreaView, FlatList} from 'react-native';
import styles from "./styles";
import tw from "tailwind-react-native-classnames";
import categories from "../../assets/data/categories";
import HomeCategory from "../../components/HomeCategory";

const firstCategory = categories.items[0];

// console.log(firstCategory.movies[0].poster);

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={[styles.container, tw``]}>

                <HomeCategory />

            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;



