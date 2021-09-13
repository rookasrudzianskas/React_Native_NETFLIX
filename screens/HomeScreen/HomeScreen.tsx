import * as React from 'react';

import {Text, View, Image, SafeAreaView, FlatList} from 'react-native';
import styles from "./styles";
import tw from "tailwind-react-native-classnames";
import HomeCategory from "../../components/HomeCategory";
import categories from "../../assets/data/categories";

const firstCategory = categories.items[0];

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={[styles.container, tw``]}>
                <FlatList showsVerticalScrollIndicator={false}  showsHorizontalScrollIndicator={false}  data={categories.items}  renderItem={({item}) => (
                    // @ts-ignore
                    <HomeCategory  category={item} />
                )}/>

            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;



