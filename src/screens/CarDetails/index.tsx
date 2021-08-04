import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';

import { getAccessiryIcon } from '../../utils/getAccessiryIcon';

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
    navigation.navigate('Scheduling', { car });
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
                  //eu nao uso arrow fuction aqui pra ele ja chamar a funcao sem precisar de click
                  //se fosse botao eu colocaria, pois ele só executará quando for clicado 
                  icon={getAccessiryIcon(accessory.type)} 
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