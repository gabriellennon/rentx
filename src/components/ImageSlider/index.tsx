import React from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage
} from './styles';

interface Props {
    imageUrl: string[];
}

export function ImageSlider({ imageUrl }: Props){
  return (
      <Container>
        <ImageIndexes>
            {
              // pegando o item do array (conteudo), e a posicao que ele estano array
              imageUrl.map((item, index) => (
                // bolinhas do slide
                <ImageIndex 
                  key={String(index)}
                  active={true} 
                />
                
              ))
            }
        </ImageIndexes>

        
          <FlatList
            data={imageUrl}
            keyExtractor={key => key}
            renderItem={({ item }) => (
              <CarImageWrapper>
                <CarImage 
                  source={{ uri: item }}
                  resizeMode="contain"
                />
              </CarImageWrapper>
            )}
            //imagem rolando na horizontal
            horizontal
            showsHorizontalScrollIndicator={false}
          />
      </Container>
  );
}