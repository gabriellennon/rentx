import React, {useEffect, useState} from 'react';
import {
  StatusBar,
} from 'react-native';
import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
  MyCarsButton
} from './styles';

import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { Load } from '../../components/Load';
import { Ionicons } from '@expo/vector-icons';

export function Home(){
  const navigation = useNavigation();
  const theme = useTheme();

  //estado para armazenar a resposta da nossa API
  const [cars, setCars] = useState<CarDTO[]>([]);
  //estado de loading
  const [loading, setLoading] = useState(true);


  //Funcao para navegar para tela
  function handleCarDetails(car: CarDTO){
    //passando para a nossa rota as informacoes, para recuperar em outra tela
    navigation.navigate('CarDetails', { car })
  }

  function handleOpenMyCars(){
    
    navigation.navigate('MyCars')
  }

  //useEffect é um hoock que é disparado assim que nossa interface é aberta
  //assim que minha home for renderizada eu chamo a api para me listar os carros
  useEffect(() => {
    //é async pois ele me retorna uma promisse e ai vai esperar retornar os dados
    async function fetchCars(){
      try {
        const response = await api.get('/cars');
        // console.log(respose);
        setCars(response.data)
        
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false);
      }
    }

    fetchCars();
  },[]);

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
        { loading ? <Load /> :
          <CarList
            data={cars}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Car data={item} onPress={() => handleCarDetails(item)} />}
          />
        }

        <MyCarsButton onPress={handleOpenMyCars} >
          <Ionicons 
            name="ios-car-sport" 
            size={32} 
            color={theme.colors.shape}
          />
        </MyCarsButton>
    </Container>
  );
}