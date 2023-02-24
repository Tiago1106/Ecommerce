import React from 'react';

import { Container, ContentRow, Title, Logo } from './styles';

import LogoComma from '../../Assets/Images/LogoComma.png'
import LogoMelissa from '../../Assets/Images/LogoMelissa.png'
import LogoForever from '../../Assets/Images/LogoForever.png'
import LogoZara from '../../Assets/Images/LogoZara.png'
import LogoAnnTaylor from '../../Assets/Images/LogoAnnTaylor.png'

const PartnerBrands: React.FC = () => {
  return (
    <Container>
      <Title>Marcas Parceiras</Title>
      <ContentRow>
        <Logo src={LogoComma}/>
        <Logo src={LogoMelissa}/>
        <Logo src={LogoForever}/>
        <Logo src={LogoZara}/>
        <Logo src={LogoAnnTaylor}/>
      </ContentRow>
    </Container>
  );
}

export default PartnerBrands;