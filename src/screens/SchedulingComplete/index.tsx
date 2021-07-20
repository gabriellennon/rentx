import React from 'react';

// Dimensions eu uso em styled components e qualquer outro lugar que eu nao consiga usar hooks
//o useWindowDimensions dentro de um component react e nos outros
import { useWindowDimensions, StatusBar } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import { ConfirmButton } from '../../components/ConfirmButton';

import {
  Container,
  Content,
  Title,
  Message,
  Footer
} from './styles';
import { useNavigation } from '@react-navigation/native';

export function SchedulingComplete(){
    //usando dentro do component react
    const { width } = useWindowDimensions();
    const navigation = useNavigation();

    //Funcao para navegar para tela
    function handleConfirmaRental(){
     navigation.navigate('Home');
   }

  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
        <LogoSvg width={width} />

        <Content>
            <DoneSvg width={80} height={80} />
            <Title>Carro alugado!</Title>

            <Message>
                Agora você só precisa ir {'\n'}
                até a concessionária da RENTX {'\n'}
                pegar o seu automóvel.
            </Message>
        </Content>

        <Footer>
            <ConfirmButton title="OK" onPress={handleConfirmaRental} />
        </Footer>
    </Container>
  );
}