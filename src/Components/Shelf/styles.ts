import styled from 'styled-components';

interface SkusProps {
  color: string;
  isSelect?: boolean;
}

export const Container = styled.div`
  width: 308px;

  display: flex;
  flex-direction: column;

  margin: 10px;
`;

export const Image = styled.img`
  width: 308px;
  height: 380px;
`

export const DivSkus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 8px 0;
`

export const ColorSku = styled.div<SkusProps>`
  width: 27px;
  height: 27px;

  margin-right: 6px;

  background-color: ${props => props.color};

  border-radius: 5px;
  border: ${props => props.isSelect && 'solid 1px #353535'};
`

export const Price = styled.span`
  font-size: 20px;
  font-weight: 700;

  color: #353535;
`

export const Name = styled.span`
  font-size: 16px;
  font-weight: 400;

  color: #000;

  margin: 8px 0;
`

export const Description = styled.span`
  font-size: 12px;
  font-weight: 400;

  color: #000;

  max-width: 259px;
`

export const Button = styled.button`
  width: 90%;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 4px;

  margin-top: 8px;

  background-color: #FAA500;
  
  color: #FFF;
  font-size: 16px;
  font-weight: 400;

  cursor: pointer;

  &:hover {
    background-color: #FFC673;
  }
`
