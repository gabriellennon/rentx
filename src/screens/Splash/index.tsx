import React from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

import { Button, StyleSheet, Dimensions } from 'react-native';

//pegando a largura da tela
const WIDTH = Dimensions.get('window').width

import {
  Container
} from './styles';

export function Splash(){
  const animation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { 
          //withTiming faz uma transicao mais suave
          translateX: withTiming(animation.value,  {
            duration: 500,
            //tem varios efeitos o Easing
            easing: Easing.bezier(.01,.98,1,-0.04)
          })
        }
      ]
    }
  })

  function handlePositionAnimation(){
    //descontando a largura da caixa (100)
    animation.value = Math.random() * (WIDTH - 100);
  }

  return (
    <Container>
        <Animated.View style={[styles.box, animatedStyles]} />

        <Button title="Mover" onPress={handlePositionAnimation}/>
    </Container>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
})