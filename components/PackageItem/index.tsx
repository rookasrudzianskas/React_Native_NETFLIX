import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, Alert, TouchableOpacity} from 'react-native';
import styles from './styles.js';
import {useNavigation} from "@react-navigation/native";
import Purchases, {PurchasesPackage} from 'react-native-purchases';
import {ENTITELMENT_ID} from "../../src/config";


// @ts-ignore
interface PackageItemProps {
// @ts-ignore
    purchasePackage: PurchasesPackage
}

// @ts-ignore
const PackageItem = ({ purchasePackage } : PackageItemProps) => {
  // const {
  //   product: { title, description, price_string },
  // } = purchasePackage;

  const navigation = useNavigation();

  const onSelection = async () => {
      // TODO purchase package
      try {
          // @ts-ignore
          const purchaseMade = await Purchases.purchasePackage(package);
          // @ts-ignore
          if (typeof purchaseMade
              .purchaserInfo
              .entitlements
              .active
              .active[ENTITELMENT_ID] !== "undefined") {
                // Unlock that great "pro" content

            navigation.goBack();

          }
      } catch (e) {
          if (!e.userCancelled) {
            console.log("SOMETHING");
          }
          console.log(e);
      }
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onSelection} style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>Pro Membership</Text>
        <Text style={styles.terms}>Feel free to watch the movies you like!</Text>
      </View>
      <Text style={styles.title}>$22</Text>
    </TouchableOpacity>
  );
};

export default PackageItem;
