import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from './styles';
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessiryIcon } from '../../utils/getAccessiryIcon';
interface CardData {
    brand: string;
    name: string;
    rent: {
        period: string;
        price: number;
    }
    thumbnail: string
}


interface Props extends RectButtonProps {
    // data: CardData
    data: CarDTO
}

export function Car({ data, ...rest }: Props){
    const MotorIcon = getAccessiryIcon(data.fuel_type);

  return (
    <Container {...rest}>
        <Details>
            <Brand>{data.brand}</Brand>
            <Name>{data.name}</Name>

            <About>
                <Rent>
                    <Period>{data.rent.period}</Period>
                    <Price>{`R$ ${data.rent.price}`}</Price>
                </Rent>

                <Type>
                    <MotorIcon />
                </Type>
            </About>
        </Details>
        <CarImage
            source={{ uri: data.thumbnail }}
            //faz com que nao corte a imagem, e ela se ajuste
            resizeMode="contain"
        />
    </Container>
  );
}