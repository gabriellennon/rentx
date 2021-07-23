import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer
} from './styles';
import { CarDTO } from '../../dtos/CarDTO';
import { useNavigation, useRoute } from '@react-navigation/native';

interface Params {
  car: CarDTO;
}

export function CarDetails(){
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

   //Funcao para navegar para tela
   function handleConfirmaRental(){
    navigation.navigate('Scheduling');
  }

  function handleBack(){
    navigation.goBack();
  }

  return (
    <Container>
        <Header>
            <BackButton onPress={handleBack} />
        </Header>

        <CarImages>
          <ImageSlider imageUrl={car.photos} />
        </CarImages>

        <Content>
          <Details>
            <Description>
              <Brand>{car.brand}</Brand>
              <Name>{car.name}</Name>
            </Description>
            <Rent>
              <Period>{car.rent.period}</Period>
              <Price>R$ {car.rent.price}</Price>
            </Rent>
          </Details>

          <Acessories>
            {
              car.accessories.map(accessory => (
                <Acessory 
                  key={accessory.type}
                  name={accessory.name} 
                  icon={SpeedSvg} 
                />

              ))
            }
          </Acessories>

          <About>{car.about}</About>
        </Content>

        <Footer>
          <Button 
            title="Escolher período do aluguel"
            onPress={handleConfirmaRental}
          />
        </Footer>
    </Container>
  );
}