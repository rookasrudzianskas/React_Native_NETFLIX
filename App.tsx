import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';
import {SafeAreaView, View} from "react-native";
import Purchases from "react-native-purchases";

import Amplify, { Auth } from 'aws-amplify'
import config from './src/aws-exports'
import {API_KEY} from "./src/config";


  Amplify.configure({
    ...config,
    Analytics: {
      disabled: true,
    },
  });


function App (){
  const [purchasesSetup, setPurchasesSetup] = useState(false);
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    const setupRC = async() => {
      // get the user id
      const userInfo = await Auth.currentAuthenticatedUser();
      if(!userInfo) {
        return;
      }

      const userID = userInfo.attributes.sub;

      Purchases.setDebugLogsEnabled(true);
      await Purchases.setup(API_KEY, userID);
      setPurchasesSetup(true);
      // console.log("This is working :f🔥")

    };

    setupRC();


  }, []);

  if (!isLoadingComplete || !purchasesSetup) {
    return null;
  } else {

    return (
      <SafeAreaProvider style={{ backgroundColor: 'black'}}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
      </SafeAreaProvider>
    )
  }
}

export default withAuthenticator(App)
