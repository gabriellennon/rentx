import React from 'react';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

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

export function Scheduling(){
    const theme = useTheme();

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
                onPress={() => {}} 
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
            <Calendar />
        </Content>

        <Footer>
            <Button 
                title="Confirmar"
                onPress={() => {}}
            />
        </Footer>
    </Container>
  );
}