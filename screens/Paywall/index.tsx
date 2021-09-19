import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './style';
import Purchases, {PurchasesPackage} from "react-native-purchases";
import PackageItem from "../../components/PackageItem";

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
        <View style={{ backgroundColor: 'black'}}>
           <FlatList data={packages} renderItem={({item}) => <Text>{item?.product?.title || 'Pro Subscription'}</Text>} />
            {/*<Text>Pro Netflix Subscription</Text>*/}
            {/*<Text>Pro Annual Netflix Subscription</Text>*/}
            <PackageItem purchasePackag={"Rokas"}/>
            <PackageItem purchasePackag={"Rokas"}/>
        </View>
    );
};

export default Paywall;
