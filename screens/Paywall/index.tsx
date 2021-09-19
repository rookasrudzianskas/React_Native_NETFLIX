import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './style';
import Purchases, {PurchasesPackage} from "react-native-purchases";

const Paywall = () => {
    const [packages, setPackages] = useState<PurchasesPackage[]>([]);

    useEffect(() => {
        const fetchOfferings = async () => {
            try {
                const offerings = await Purchases.getOfferings();
                // console.warn("ROOKAS")
                //     console.warn("THis is offerings", offerings);
                if (offerings.current !== null) {
                    setPackages(offerings.current.availablePackages);
                // Display current offering with offerings.current
                }
            } catch (e) {
                console.log(e);
            }
        }

        fetchOfferings();
    }, []);

    return (
        <View>
           <FlatList data={packages} renderItem={({item}) => <Text>{item?.product?.title || 'Pro Subscription'}</Text>} />
            <Text>Pro Netflix Subscription</Text>
            <Text>Pro Annual Netflix Subscription</Text>
        </View>
    );
};

export default Paywall;
