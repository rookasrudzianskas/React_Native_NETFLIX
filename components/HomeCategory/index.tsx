import React from 'react';
import {FlatList, Image, Text, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import styles from "../../screens/HomeScreen/styles";


const HomeCategory = () => {
    return (
        <View>
            <View>
                <Text style={tw`text-white text-xl font-bold mt-1 mb-1`}>Popular on Netflix</Text>
                {/*// @ts-ignore*/}
                <FlatList horizontal={true} showsVerticalScrollIndicator={false}  showsHorizontalScrollIndicator={false} data={firstCategory.movies} renderItem={({item}) => (
                    <View>
                        <Image style={[tw`m-2`, styles.image]} source={{ uri: item.poster }} />
                    </View>
                )}/>
            </View>
        </View>
    );
};

export default HomeCategory;
