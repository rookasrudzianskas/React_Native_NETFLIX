import React from 'react';
import {FlatList, Image, Text, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import styles from "../../screens/HomeScreen/styles";

interface HomeCategoryProps {
    category: {
        id: string,
        title: string,
        movies: [
            id: string,
            poster: string,
        ]
    }
}

const HomeCategory = (props: HomeCategoryProps) => {

    const {category} = props;

    return (
            <View>
                <Text style={tw`text-white text-xl font-bold mt-1 mb-1`}>{category.title}</Text>
                {/*// @ts-ignore*/}
                <FlatList horizontal={true} showsVerticalScrollIndicator={false}  showsHorizontalScrollIndicator={false} data={category.movies} renderItem={({item}) => (
                    <View>
                        {/*// @ts-ignore*/}
                        <Image style={[tw`m-2`, styles.image]} source={{ uri: item.poster }} />
                    </View>
                )}/>
            </View>
    );
};

export default HomeCategory;
