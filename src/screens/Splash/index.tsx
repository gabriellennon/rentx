import React, {useEffect} from 'react';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  Easing, 
  interpolate, 
  Extrapolate
} from 'react-native-reanimated';

import { Button, StyleSheet, Dimensions } from 'react-native';
import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

//pegando a largura da tela
const WIDTH = Dimensions.get('window').width

import {
  Container
} from './styles';

export function Splash(){
  const splashAnimation = useSharedValue(0);
  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, 
        //vai de 0 até 50 a animação
        [0, 25, 50], 
        //etapas da animação, eu digo quanto quero de opacidade em cada
        [1, .3, 0],
        Extrapolate.CLAMP
      )
    }
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, 
        //vai de 0 até 50 a animação
        [0, 25, 50], 
        //etapas da animação, eu digo quanto quero de opacidade em cada
        [0, .3, 1],
        Extrapolate.CLAMP
      )
    }
  });


  useEffect(() =>{
    splashAnimation.value = withTiming( 50,{ duration: 5000 } )
  },[]);

  return (
    <Container>
      <Animated.View style={brandStyle}>
        <BrandSvg 
          width={80}
          height={50}
        />
      </Animated.View>

      <Animated.View style={logoStyle}>
        <LogoSvg 
          width={180}
          height={20}
        />
      </Animated.View>
    </Container>
  );
}