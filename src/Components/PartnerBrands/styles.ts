import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #353535;
`

export const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  width: 308px;
  height: 64px;

  margin: 10px;

  border-radius: 4px;

  @media (max-width: 1630px) {
    max-width: 200px;
    height: auto;
  }

  @media (max-width: 1024px) {
    max-width: 120px;
  }

  @media (max-width: 768px) {
    max-width: 280px;
  }
`

