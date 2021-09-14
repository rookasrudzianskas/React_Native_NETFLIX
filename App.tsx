import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';
import {SafeAreaView} from "react-native";

import Amplify from 'aws-amplify'
import config from './src/aws-exports'


  Amplify.configure({
    ...config,
    Analytics: {
      disabled: true,
    },
  });


function App (){
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  if (!isLoadingComplete) {
    return null;
  } else {

    return (
      <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
      </SafeAreaProvider>
    )
  }
}

export default withAuthenticator(App)
