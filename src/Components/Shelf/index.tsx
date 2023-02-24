import React from 'react';

import { Container, ColorSku, Description, DivSkus, Image, Name, Price, Button } from './styles';

interface ColorsProps {
  color: string;
  isSelect: boolean;
}

interface ShelfProps {
    content: {
      imageUrl: string;
      colorsSku: ColorsProps[];
      price: string;
      name: string;
      description: string;
    }
}

const Shelf: React.FC<ShelfProps> = ({ content }) => {
  return (
    <Container>
      <Image src={content.imageUrl}/>
      <DivSkus>
        {content.colorsSku.map((color, index) => (
          <ColorSku key={index} color={color.color} isSelect={color.isSelect}/>
        ))}
      </DivSkus>
      <Price>R$ ${content.price}</Price>
      <Name>{content.name}</Name>
      <Description>{content.description}</Description>
      <Button>Adicionar</Button>
    </Container>
  );
}

export default Shelf;