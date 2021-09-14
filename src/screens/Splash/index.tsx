import React, {useEffect} from 'react';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  Easing, 
  interpolate, 
  Extrapolate,
  runOnJS
} from 'react-native-reanimated';

import { Button, StyleSheet, Dimensions } from 'react-native';
import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

//pegando a largura da tela
const WIDTH = Dimensions.get('window').width

import {
  Container
} from './styles';
import { useNavigation } from '@react-navigation/native';

export function Splash(){
  const splashAnimation = useSharedValue(0);
  const navigation = useNavigation();

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, 
        //vai de 0 até 50 a animação
        [0, 50], 
        //etapas da animação, eu digo quanto quero de opacidade em cada
        [1, 0]
      ),
      transform: [
        {
          translateX: interpolate(splashAnimation.value, [0, 50], [0, -50], Extrapolate.CLAMP)
        }
      ]
    }
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, 
        //vai de 0 até 50 a animação
        [0, 25, 50], 
        //etapas da animação, eu digo quanto quero de opacidade em cada
        [0, .3, 1],
      ),
      transform: [
        {
          translateX: interpolate(splashAnimation.value, [0, 50], [-50, 0], Extrapolate.CLAMP)
        }
      ]
    }
  });

  function startApp(){
    navigation.navigate('Home');
  }

  useEffect(() =>{
    splashAnimation.value = withTiming( 
      50,
      { duration: 2000 },
      () => {
        'worklet'
        runOnJS(startApp)();
      }
    )
  },[]);

  return (
    <Container>
      <Animated.View style={[brandStyle, {position: 'absolute'}]}>
        <BrandSvg 
          width={80}
          height={50}
        />
      </Animated.View>

      <Animated.View style={[logoStyle, , {position: 'absolute'}]}>
        <LogoSvg 
          width={180}
          height={20}
        />
      </Animated.View>
    </Container>
  );
}