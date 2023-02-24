import React from 'react';

import { Container, DivLogos, Logo } from './styles';

import { LOGO_CONTENTS } from './contents'

const Rodape: React.FC = () => {
  return (
    <Container>
      {LOGO_CONTENTS.map((content, index) => (
        <DivLogos key={index}>
          {content.map((logo, index) => (
            <Logo key={index} src={logo}/>
          ))}
        </DivLogos>
      ))}
    </Container>
  );
}

export default Rodape;