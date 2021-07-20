import React from 'react';
import {
  StatusBar,
} from 'react-native';
import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList
} from './styles';

import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';

export function Home(){
  const navigation = useNavigation();

  const carData = {
    brand: 'audi',
    name: '5 Coupé',
    rent: {
        period: 'ao dia',
        price: 120
    },
    thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
  }


  //Funcao para navegar para tela
  function handleCarDetails(){
    navigation.navigate('CarDetails')
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
        <CarList
          data={[1,2,3, 4, 5, 6 , 7]}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Car data={carData} onPress={handleCarDetails} />}
        >
          <Car data={carData}/>
        </CarList>
    </Container>
  );
}