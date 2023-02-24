import React from 'react';

import LogoSvg from '../../Assets/Images/Svg/logo-maeztra-novo.svg'
import IconPerson from '../../Assets/Images/Svg/IconPerson.svg'
import IconHeart from '../../Assets/Images/Svg/IconHeart.svg'
import IconCart from '../../Assets/Images/Svg/IconCart.svg'
import IconSearch from '../../Assets/Images/Svg/IconSearch.svg'

import SubHeader from '../SubHeader';
import Menu from '../Menu';

import InputSearch from '../InputSearch';
import ButtonHeader from '../ButtonHeader';

import { Container, Image, ContainerButtons, ContainerButtonsMobile } from './styles';

const Header: React.FC = () => {
  
  const handleSearch = (search: string) => {
    console.log(`Pesquisando por ${search}...`);
  };

  const handleClickMyAccount = () => {
    console.log('Click My Account')
  }
  
  return (
    <>
      <SubHeader />
      <Container>
        <Image src={LogoSvg}/>
        <InputSearch placeholder='O Que Você Busca?' onSearch={handleSearch}/>
        <ContainerButtons>
          <ButtonHeader title='Minha Conta' image={IconHeart} onClick={handleClickMyAccount}/>
          <ButtonHeader title='Meus Favoritos' image={IconPerson} onClick={handleClickMyAccount}/>
          <ButtonHeader title='Meu Carrinho' image={IconCart} onClick={handleClickMyAccount} isCart={true}/>
        </ContainerButtons>
        <ContainerButtonsMobile>
          <ButtonHeader title='Search' image={IconSearch} onClick={handleClickMyAccount}/>
          <ButtonHeader title='Meu Carrinho' image={IconCart} onClick={handleClickMyAccount}/>
        </ContainerButtonsMobile>
      </Container>
      <Menu />
    </>
  );
}

export default Header;