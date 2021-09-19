import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import Purchases from "react-native-purchases";

const Paywall = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        const fetchOfferings = async () => {
            try {
                const offerings = await Purchases.getOfferings();
                if (offerings.current !== null) {
                }
                // Display current offering with offerings.current
            } catch (e) {
            }
        }

        fetchOfferings();
    }, []);

    return (
        <View>
           <Text>Paywall</Text>
        </View>
    );
};

export default Paywall;
