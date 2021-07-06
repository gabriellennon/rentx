import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Archivo_400Regular,  Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo';
import { ThemeProvider } from 'styled-components';

import theme from './src/styles/theme';
import { Home } from './src/screens/Home';
import { CarDetails } from './src/screens/CarDetails';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  //enquanto a fonte nao estiver carregada
  if(!fontsLoaded){
    //expo install expo-app-loading
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      {/* <Home /> */}
      <CarDetails />
    </ThemeProvider>
  );
}

