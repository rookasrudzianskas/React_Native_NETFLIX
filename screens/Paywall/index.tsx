import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './style';
import Purchases, {PurchasesPackage} from "react-native-purchases";
import PackageItem from "../../components/PackageItem";
import tw from "tailwind-react-native-classnames";


const Paywall = () => {
    const [packages, setPackages] = useState<PurchasesPackage[]>([]);

    useEffect(() => {
        const fetchOfferings = async () => {
            try {
                const offerings = await Purchases.getOfferings();
                // console.warn("ROOKAS");
                // console.warn("THis is offerings", offerings);
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
            <View style={{ backgroundColor: 'black', display: 'flex', flexGrow: 1}}>

               {/*<FlatList data={packages} renderItem={({item}) => <Text>{item?.product?.title || 'Pro Subscription'}</Text>} />*/}
                {/*<Text>Pro Netflix Subscription</Text>*/}
                {/*<Text>Pro Annual Netflix Subscription</Text>*/}
                <View style={tw`flex justify-center mt-5`}>
            {/*// @ts-ignore*/}
                    <PackageItem purchasePackage={"Rokas"}/>
            {/*// @ts-ignore*/}
                    <PackageItem purchasePackage={"Rokas"}/>
                </View>
            </View>
    );
};

export default Paywall;
