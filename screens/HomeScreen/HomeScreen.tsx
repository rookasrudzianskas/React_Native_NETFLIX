import * as React from 'react';

import {Text, View, Image, SafeAreaView, FlatList} from 'react-native';
import {DataStore} from 'aws-amplify';

import styles from "./styles";
import tw from "tailwind-react-native-classnames";
import HomeCategory from "../../components/HomeCategory";
import categories from "../../assets/data/categories";
import {useEffect, useState} from "react";
import {Category} from "../../src/models";


const firstCategory = categories.items[0];

const HomeScreen = () => {
    const [categories, setCategories] = useState<Category[]>([]);


    useEffect(() => {
        const fetchCategories = async () => {
            setCategories(await DataStore.query(Category));
            // console.log(response);
        }

        fetchCategories();
    }, []);

    return (
        <SafeAreaView style={{backgroundColor: 'black'}}>
            <View style={[styles.container, tw``]}>
                <FlatList showsVerticalScrollIndicator={false}  showsHorizontalScrollIndicator={false}  data={categories}  renderItem={({item}) => (
                    // @ts-ignore
                    <HomeCategory  category={item} />
                )}/>

            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;



