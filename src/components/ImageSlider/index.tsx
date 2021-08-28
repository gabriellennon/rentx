import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';

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

interface ChangeImageProps {
  viewableItems: ViewToken[];
    changed: ViewToken[];
}

export function ImageSlider({ imageUrl }: Props){
  const [imageIndex, setImageIndex] = useState(0)

  //Pego as infos da imagem que ta com foco no carrossel
  const indexChanged = useRef((info: ChangeImageProps) =>{
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  return (
      <Container>
        <ImageIndexes>
            {
              // pegando o item do array (conteudo), e a posicao que ele estano array
              imageUrl.map((item, index) => (
                // bolinhas do slide
                <ImageIndex 
                  key={String(index)}
                  active={index === imageIndex} 
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
            //
            onViewableItemsChanged={indexChanged.current}
          />
      </Container>
  );
}