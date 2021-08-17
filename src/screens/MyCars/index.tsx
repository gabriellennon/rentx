import React, { useState, useEffect } from 'react';
import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';
import { StatusBar, Alert, FlatList } from 'react-native';
import { BackButton } from '../../components/BackButton';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
} from './styles';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { Car } from '../../components/Car';

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
}

export function MyCars(){
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const navigation = useNavigation();

     //Funcao botao voltar
     function handleBack(){
      navigation.goBack();
    }

  useEffect(() => {
    async function fetchCars(){
      try {
        //Fazendo a busca dos agendamentos
        //Passando o id do usuario na url
        const response = await api.get('schedules_byuser?user_id=1');
        setCars(response.data);
        console.log(response)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();

  }, []);

  return (
    <Container>
      <Header>
            <StatusBar 
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />
            <BackButton 
                color={theme.colors.shape}
                onPress={handleBack} 
            />
            <Title>
                Escolha uma {'\n'}
                data de início e {'\n'}
                fim do aluguel
            </Title>
            <SubTitle>
                Conforto, segurança e praticidade.
            </SubTitle>
      </Header>

      <Content>
        <Appointments>
          <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
          <AppointmentsQuantity>05</AppointmentsQuantity>
        </Appointments>

        <FlatList 
          data={cars}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Car data={item.car} />
          )}
        />
      </Content>
    </Container>
  );
}