import React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import styles from './styles.js';
import {useNavigation} from "@react-navigation/native";
import Purchases, {PurchasesPackage} from "react-native-purchases";


// @ts-ignore
interface PackageItemProps {
// @ts-ignore
    purchasePackage: PurchasesPackage
}

// @ts-ignore
// @ts-ignore
const PackageItem = ({ purchasePackage } : PackageItemProps) => {
  // const {
  //   product: { title, description, price_string },
  // } = purchasePackage;

  const navigation = useNavigation();

  const onSelection = async () => {
    // TODO purchase package
      console.log("SOMETHING");
  };

  return (
    <Pressable onPress={onSelection} style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>Pro Membership</Text>
        <Text style={styles.terms}>Feel free to watch the movies you like!</Text>
      </View>
      <Text style={styles.title}>$22</Text>
    </Pressable>
  );
};

export default PackageItem;
