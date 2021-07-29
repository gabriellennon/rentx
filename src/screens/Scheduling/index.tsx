import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar, DayProps, generateInterval, MarketDateProps } from '../../components/Calendar';

import ArroSvg from '../../assets/arrow.svg';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';
import { useNavigation } from '@react-navigation/native';

export function Scheduling(){
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
    const [markedDates, setMarkedDates] = useState({} as MarketDateProps)

    const theme = useTheme();
    const navigation = useNavigation();

    //Funcao para navegar para tela
    function handleConfirmaRental(){
     navigation.navigate('SchedulingDetails');
   }

   //Funcao botao voltar
   function handleBack(){
    navigation.goBack();
  }

  //
  function handleChangeDate(date: DayProps){
      //verificando se a data que eu selecionei já esta selecionada
      let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
      let end = date;

      //garantindo que sempre a data menor esta no start
      if(start.timestamp > end.timestamp){
          start = end;
          end = start;
      }

      //passando a ultima data selecionada
      setLastSelectedDate(end);

      const interval = generateInterval(start, end);
      setMarkedDates(interval)
  }

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

            <RentalPeriod>
                <DateInfo>
                    <DateTitle>DE</DateTitle>
                    <DateValue selected={false}></DateValue>
                </DateInfo>

                <ArroSvg />

                <DateInfo>
                    <DateTitle>ATE</DateTitle>
                    <DateValue selected={false}></DateValue>
                </DateInfo>
            </RentalPeriod>
        </Header>

        <Content>
            <Calendar 
                markedDates={markedDates}
                onDayPress={handleChangeDate}
            />
        </Content>

        <Footer>
            <Button 
                title="Confirmar"
                onPress={handleConfirmaRental}
            />
        </Footer>
    </Container>
  );
}