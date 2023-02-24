import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  width: 100%;
  height: 85px;

  background-color: #353535;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 30px 0;
  }
`;

export const DivLogos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 768px) {
    margin: 10px;
  }
`

export const Logo = styled.img`
  width: auto;
  height: 32px;

  margin: 0 7px;

  @media (max-width: 768px) {
    height: 20px;
  }
`
