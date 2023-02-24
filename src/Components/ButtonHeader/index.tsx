import React from 'react';

import { Container, Image, Text } from './styles';

interface Props {
  title: string;
  image: string;
  onClick: () => void;
  isCart?: boolean;
}

const ButtonHeader: React.FC<Props> = ({ title, image, onClick, isCart }) => {
  return (
    <Container onClick={onClick} isCart={isCart}>
      <Image src={image} alt="Imagem"/>
      <Text>{title}</Text>
    </Container>
  );
};

export default ButtonHeader;