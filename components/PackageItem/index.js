import React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles.js';

const PackageItem = ({ purchasePackage, setIsPurchasing }) => {
  const {
    product: { title, description, price_string },
  } = purchasePackage;

  const navigation = useNavigation();

  const onSelection = async () => {
    // TODO purchase package
      console.log("SOMETHING");
  };

  return (
    <Pressable onPress={onSelection} style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.terms}>{description}</Text>
      </View>
      <Text style={styles.title}>{price_string}</Text>
    </Pressable>
  );
};

export default PackageItem;
