import styled from 'styled-components';

interface BorderProps {
  isCart?: boolean;
}

export const Container = styled.div<BorderProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  margin: 0 10px;
  padding: 0 15px;

  cursor: pointer;

  border: ${props => props.isCart ? '1px solid #FAA500' : 'none'};
  border-radius: 10px;

  @media (max-width: 768px) {
    border: none;
    margin: 0 15px;
    padding: 0;
  }
`;

export const Image = styled.img`
  height: 18px;
  width: 18px;

  margin-right: 8px;
`

export const Text = styled.p`
  font-size: 14px;
  color: #353535;

  @media (max-width: 768px) {
    display: none;
  }
`
