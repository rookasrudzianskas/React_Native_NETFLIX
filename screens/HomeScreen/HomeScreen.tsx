import * as React from 'react';

import {Text, View, Image, SafeAreaView, FlatList} from 'react-native';
import styles from "./styles";
import tw from "tailwind-react-native-classnames";
import HomeCategory from "../../components/HomeCategory";


const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={[styles.container, tw``]}>

                {/* List of categories*/}
                <HomeCategory category={firstCategory} />

            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;



