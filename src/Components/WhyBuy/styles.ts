import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: #353535;
`

export const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 308px;
  height: 64px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #EFEFEF;

  border-radius: 4px;

  margin: 10px;

  @media (max-width: 1630px) {
    width: auto;
    padding: 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const ContentMobile = styled.div`
  width: 308px;
  height: 64px;

  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #EFEFEF;

  border-radius: 4px;

  margin: 10px;

  @media (max-width: 768px) {
    display: flex;
  }
`

export const Icon = styled.img`
  width: 32px;
  height: 32px;

  margin-right: 10px;
`

export const ContentTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TitleContent = styled.h1`
  font-size: 14px;
  font-weight: 700;

  color: #353535;

  margin: 0;
`

export const TextContent = styled.p`
  font-size: 12px;
  font-weight: 400;

  color: #000;

  margin: 0;
`
