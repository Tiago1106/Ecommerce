import React from 'react';

import { ContainerInfos, DivColumnInfos, InfosColumn, TitleColumn, Icon } from './styles';

import Newsletter from '../Newsletter'
import Rodape from '../Rodape'

import { CONTENTS_INFO } from './contents'

const Footer: React.FC = () => {
  return (
    <>
      <Newsletter />
      <ContainerInfos>
        {CONTENTS_INFO.map((content, index) => (
          <DivColumnInfos key={index}>
            <TitleColumn>{content.title}</TitleColumn>
            <Icon />
            {content.info.map((info, index) => (
              <InfosColumn key={index}>{info}</InfosColumn>    
            ))}
          </DivColumnInfos>
        ))}
      </ContainerInfos>
      <Rodape />
    </>
  );
}

export default Footer;