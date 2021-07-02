import React from 'react';
import {
  StatusBar,
} from 'react-native';
import {
  Container,
  Header,
  TotalCars,
  HeaderContent
} from './styles';

import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { Car } from '../../components/Car';

export function Home(){
  const carData = {
    brand: 'audi',
    name: '5 Coupé',
    rent: {
        period: 'ao dia',
        price: 120
    },
    thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
  }

  const carDataTwo = {
    brand: 'audi',
    name: '5 Coupé',
    rent: {
        period: 'ao dia',
        price: 120
    },
    thumbnail: 'https://catalogo.webmotors.com.br/imagens/prod/347842/LAND_ROVER_RANGE_ROVER_VELAR_2.0_P300_GASOLINA_RDYNAMIC_HSE_AUTOMATICO_3478421213210552.png?s=fill&w=440&h=330&q=80&t=true'
  }

  return (
    <Container>
        <StatusBar 
          barStyle="light-content"
          //barra fica por cima do header e nao descontar como estava (contando o header a partir do staus bar)
          translucent
          backgroundColor="transparent"
        />
        <Header>
          <HeaderContent>
            <Logo 
              width={RFValue(108)} 
              height={RFValue(12)} 
            />
            <TotalCars>
              Total de 12 carros
            </TotalCars>
          </HeaderContent>
        </Header>
        <Car  data={carData}/>
        <Car  data={carDataTwo}/>
    </Container>
  );
}