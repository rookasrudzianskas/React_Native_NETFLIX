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

    {/*// @ts-ignore*/}
                <FlatList horizontal={true} showsVerticalScrollIndicator={false}  showsHorizontalScrollIndicator={false} data={firstCategory.movies} renderItem={({item}) => (
                    <View>
                        <Image style={[tw``, styles.image]} source={{ uri: item.poster }} />
                    </View>
                )}/>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;



