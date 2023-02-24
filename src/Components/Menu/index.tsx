import React from 'react';

import { Container, DivTitle, Icon, Title } from './styles';

import IconEnphasis from '../../Assets/Images/Svg/IconEnphasis.svg'

import CATEGORRYS from './categorys'

const Menu: React.FC = () => {
  return (
    <Container>
      {CATEGORRYS.map((category, index) => (
        <DivTitle key={index}>
          {category.isEnphasis && <Icon src={IconEnphasis}/>}
          <Title isEmphasis={category.isEnphasis}>{category.name}</Title>
        </DivTitle>
      ))}
    </Container>
  );
}

export default Menu;