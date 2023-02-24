import styled from 'styled-components';

import { SlEnvolopeLetter } from 'react-icons/sl'

export const Container = styled.div`
  display: flex;
  justify-content: center;

  background-color: #000000B2;

  width: 100%;
  height: 100%;

  padding-top: 200px;
  
  position: absolute;
  z-index: 9999;

  top: 0;
  left: 0;

  @media (max-width: 768px) {
    padding-top: 50px;
  }
`;

export const Content = styled.div`
  width: 848px;
  height: 529px;

  background-color: #FFF;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  position: relative;

  @media (max-width: 768px) {
    width: 90%;
    height: 350px;
  }
`

export const Image = styled.img`
  width: 436px;
  height: 529px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ContentOffers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 0 52px;
`

export const  Icon = styled(SlEnvolopeLetter)`
  font-size: 23px;
  color: #787D83;
`

export const BemVindo = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #464B54;

  margin: 20px 0;
`

export const OffersTop = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: #787D83;
`

export const OffersBottom = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #787D83;

  text-align: center;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;

  border: 1px solid #C4C4C4;
  border-radius: 10px;

  margin-top: 25px;
  margin-bottom: 12px;
`

export const Button = styled.button`
  width: 100%;
  height: 40px;

  border: 0;
  border-radius: 10px;

  background-color: #FAA500;
  color: #FFF;
`

export const Close = styled.span`
  font-size: 12px;
  font-weight: 400;

  color: #FFF;
  position: absolute;

  right: 0;
  top: -20px;

  cursor: pointer;
`
