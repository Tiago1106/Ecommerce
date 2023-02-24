import styled from 'styled-components';

import {BiPlus} from 'react-icons/bi'

export const ContainerInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  padding: 0 40px;

  height: 240px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const DivColumnInfos = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  margin: 0 6.75rem;

  height: 100%;

  @media (max-width: 768px) {
    margin: 10px 0;
    height: auto;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`

export const TitleColumn = styled.span`
  font-size: 16px;
  font-weight: 700;

  color: #353535;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    margin: 0;
  }
`

export const InfosColumn = styled.span`
  font-size: 12px;
  font-weight: 400;

  color: #000;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Icon = styled(BiPlus)`
  font-size: 16px;
  color: #353535;
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`
