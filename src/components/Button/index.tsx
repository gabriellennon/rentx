import React from 'react';
import { useTheme } from 'styled-components'; 

import {
  Container,
  Title
} from './styles';

interface Props {
    title: string;
    color?: string;
    onPress: () => void;
    enabled?: boolean;
}

export function Button({ 
  title, 
  color, 
  enabled = true, 
  ...rest 
}: Props){
  const theme = useTheme();

  return (
    <Container 
      {...rest} 
      color={color ? color : theme.colors.main}
      //desabilitando o click do botao quando eu quiser
      enabled={enabled}
      style={{ opacity: enabled ? 1 : .5 }}
    >
        <Title>{title}</Title>
    </Container>
  );
}