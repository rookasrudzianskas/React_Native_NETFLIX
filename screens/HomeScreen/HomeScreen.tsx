import * as React from 'react';

import { Text, View, Image } from 'react-native';
import styles from "./styles";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={[tw`w-96 h-96`, styles.image]} source={{ uri: "https://cdn.shopify.com/s/files/1/0969/9128/products/MoneyHeist-NetflixTVShowPosterFanArt_f3ca06f4-0ea3-4795-818a-b680979e8073.jpg?v=1589268519" }} />
        </View>
    );
}

export default HomeScreen;



