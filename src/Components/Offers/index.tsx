import React, { useState } from 'react';

import Img from '../../Assets/Images/ImageOffers.png'

import { Container, Content, Image, ContentOffers, Icon, BemVindo, OffersTop, OffersBottom, Input, Button, Close  } from './styles';

const Offers: React.FC = () => {
  const [opened, setOpened] = useState<boolean>(true)
  
  return (
    <>
      {opened && (
        <Container>
          <Content>
            <Close onClick={() => setOpened(false)}>FECHAR</Close>
            <Image src={Img}/>
            <ContentOffers>
              <Icon />
              <BemVindo>Bem Vindo à MAEZTRA</BemVindo>
              <OffersTop>Receba em Primeira mão</OffersTop>
              <OffersBottom>desconto e ofertas exclusivas</OffersBottom>
              <Input placeholder='Digite seu e-mail'/>
              <Button>ENVIAR</Button>
            </ContentOffers>
          </Content>
        </Container>
      )}
    </>
  );
}

export default Offers;