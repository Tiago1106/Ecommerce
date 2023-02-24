import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 0 auto;

  width: 100%;
  height: 88px;

  background-color: #fff;
  box-shadow: 0px 4px 6px 0px #00000014;

  position: relative;
  z-index: 999;
`;

export const Image = styled.img`
  height: 18px;
  width: 145px;
`

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ContainerButtonsMobile = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
  }
`
