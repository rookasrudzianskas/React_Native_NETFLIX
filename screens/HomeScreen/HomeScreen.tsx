import * as React from 'react';

import {Text, View, Image, SafeAreaView} from 'react-native';
import styles from "./styles";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={[styles.container, tw`flex-1`]}>
                <Image style={[tw`w-44 h-44`, styles.image]} source={{ uri: "https://cdn.shopify.com/s/files/1/0969/9128/products/MoneyHeist-NetflixTVShowPosterFanArt_f3ca06f4-0ea3-4795-818a-b680979e8073.jpg?v=1589268519" }} />
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;



