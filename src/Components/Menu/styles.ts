import styled from 'styled-components';

interface TitleProps {
  isEmphasis: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  width: 100%;
  height: 48px;

  background-color: #FFF;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DivTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  margin: 0 40px;

  cursor: pointer;
`

export const Title = styled.p<TitleProps>`
  font-size: 14px;
  color: ${props => props.isEmphasis ? '#FAA500' : '#353535'};
  font-weight: ${props => props.isEmphasis ? '700' : '400'};
`

export const Icon = styled.img`
  width: 16px;
  height: 16px;

  margin-right: 5px;
`


