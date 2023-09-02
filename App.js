import * as React from 'react';
import { StatusBar } from 'react-native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_600SemiBold,
  
} from '@expo-google-fonts/poppins'

 

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';



export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,

  })
  
  if(!fontsLoaded) {
    return null; 
  }
  return ( 

    <NavigationContainer>
      <StatusBar backgroundColor={'black'} barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  );
}


