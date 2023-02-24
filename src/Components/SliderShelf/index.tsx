import React from 'react';

import { ContainerShelf, Container, Title } from './styles';

import Shelf from '../Shelf';

interface ColorsProps {
  color: string;
  isSelect: boolean;
}

interface SliderProps {
  contents: {
    imageUrl: string;
    colorsSku: ColorsProps[];
    price: string;
    name: string;
    description: string;
  }[]
}

const SliderShelf: React.FC<SliderProps> = ({ contents }) => {
  
  return (
    <Container>      
      <Title>As Mais Pedidas</Title>
      <ContainerShelf>
        {contents.map((content, index) => (
          <Shelf key={index} content={content}/>
        ))}
      </ContainerShelf>     
    </Container>
  );
}

export default SliderShelf;