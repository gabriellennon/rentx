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
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import { getPlataformDate } from '../../utils/getPlataformDate';
import { CarDTO } from '../../dtos/CarDTO';

interface RentalPeriod {
    startFormatted: string;
    endFormatted: string;
}

interface Params {
    car: CarDTO;
}

export function Scheduling(){
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
    const [markedDates, setMarkedDates] = useState({} as MarketDateProps)
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

    const theme = useTheme();
    const navigation = useNavigation();
    const route = useRoute();
    const { car } = route.params as Params;
  

    //Funcao para navegar para tela
    function handleConfirmaRental(){
        navigation.navigate('SchedulingDetails', {
            car,
            dates: Object.keys(markedDates)
        });

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

      const firstDate = Object.keys(interval)[0];
      const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

      //pegando o valor selecionado
      setRentalPeriod({
          startFormatted: format(getPlataformDate(new Date(firstDate)), 'dd/MM/yyyy'),
          endFormatted: format(getPlataformDate(new Date(endDate)), 'dd/MM/yyyy'),
      })
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
                    <DateValue selected={!!rentalPeriod.startFormatted}>
                        {rentalPeriod.startFormatted}
                    </DateValue>
                </DateInfo>

                <ArroSvg />

                <DateInfo>
                    <DateTitle>ATE</DateTitle>
                    {/* transformando o conteudo disso em boolean, se tiver conteudo o retorno é verdadeiro */}
                    <DateValue selected={!!rentalPeriod.endFormatted}>
                    {rentalPeriod.endFormatted}
                    </DateValue>
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
                enabled={!!rentalPeriod.endFormatted}
            />
        </Footer>
    </Container>
  );
}