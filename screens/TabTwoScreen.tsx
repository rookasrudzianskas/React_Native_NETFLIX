import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import tw from "tailwind-react-native-classnames";
import { Auth } from 'aws-amplify';
import Purchases from "react-native-purchases";

export default function TabTwoScreen() {
  const onLogout = async () => {
    // Later log out
    await Purchases.reset();
    await Auth.signOut();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coming Soon</Text>

      <TouchableOpacity onPress={onLogout} activeOpacity={0.8}>
        <View style={tw`flex flex-row mt-10 bg-gray-200 py-3 px-24 rounded-xl`}>
          <Text style={tw`text-gray-800 font-bold`}>Sign out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

// done
