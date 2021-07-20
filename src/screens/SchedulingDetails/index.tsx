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
import { Feather } from '@expo/vector-icons';

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
  Acessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

export function SchedulingDetails(){
  const theme = useTheme();
  const navigation = useNavigation();

  //Funcao para navegar para tela
  function handleConfirmaRental(){
   navigation.navigate('SchedulingComplete');
 }

  return (
    <Container>
        <Header>
            <BackButton onPress={() => {}} />
        </Header>

        <CarImages>
          <ImageSlider imageUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']} />
        </CarImages>

        <Content>
          <Details>
            <Description>
              <Brand>Lamborghini</Brand>
              <Name>Huracan</Name>
            </Description>
            <Rent>
              <Period>Ao dia</Period>
              <Price>R$ 580</Price>
            </Rent>
          </Details>

          <Acessories>
            <Acessory name="380Km/h" icon={SpeedSvg} />
            <Acessory name="3.2s" icon={AccelerationSvg} />
            <Acessory name="800 HP" icon={ForceSvg} />
            <Acessory name="Gasolina" icon={GasolineSvg} />
            <Acessory name="Auto" icon={ExchangeSvg} />
            <Acessory name="2 pessoas" icon={PeopleSvg} />
          </Acessories>

          <RentalPeriod>
            <CalendarIcon>
              <Feather 
                name="calendar"
                size={RFValue(20)}
                color={theme.colors.shape}
              />
            </CalendarIcon>
            <DateInfo>
              <DateTitle>DE</DateTitle>
              <DateValue>18/06/2021</DateValue>
            </DateInfo>

            <Feather 
                name="chevron-right"
                size={RFValue(10)}
                color={theme.colors.text}
              />

            <DateInfo>
              <DateTitle>ATÉ</DateTitle>
              <DateValue>18/06/2021</DateValue>
            </DateInfo>
          </RentalPeriod>
        
          <RentalPrice>
            <RentalPriceLabel>TOTAL</RentalPriceLabel>
            <RentalPriceDetails>
              <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
              <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
            </RentalPriceDetails>
          </RentalPrice>
        </Content>

        <Footer>
          <Button 
            title="Alugar agora"
            onPress={handleConfirmaRental}
            color={theme.colors.success}
          />
        </Footer>
    </Container>
  );
}