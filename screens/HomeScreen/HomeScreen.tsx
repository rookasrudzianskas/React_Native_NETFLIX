import * as React from 'react';

import {Text, View, Image, SafeAreaView, FlatList} from 'react-native';
import styles from "./styles";
import tw from "tailwind-react-native-classnames";
import categories from "../../assets/data/categories";

const firstCategory = categories.items[0];

// console.log(firstCategory.movies[0].poster);

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={[styles.container, tw``]}>

                <Text style={tw`text-white text-xl font-bold mt-4`}>Popular on Netflix</Text>
    {/*// @ts-ignore*/}
                <FlatList horizontal={true} showsVerticalScrollIndicator={false}  showsHorizontalScrollIndicator={false} data={firstCategory.movies} renderItem={({item}) => (
                    <View>
                        <Image style={[tw`m-2`, styles.image]} source={{ uri: item.poster }} />
                    </View>
                )}/>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;



