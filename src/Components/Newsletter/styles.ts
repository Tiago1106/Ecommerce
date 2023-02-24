import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: #FAFAFA;
  border-top: 2 solid #EFEFEF;
  border-bottom: 2 solid #EFEFEF;

  margin: 40px 0;
  padding: 40px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: 700;

  color: #000;

  margin-right: 5rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 40rem;
  height: 40px;
  
  background-color: #FFF;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;

  padding: 0;
  padding-left: 20px;
  margin: 0;
  border-radius: 4px;
  border: 1px solid #353535;

  position: relative;
  right: -5px;
  z-index: 1;

  @media (max-width: 768px) {
    position: none;
    right: none;
    z-index: none;

    width: auto;

    margin-right: 10px;
  }

  color: #353535;
  background-color: transparent;

  font-size: 16px;

  ::placeholder {
    color: #353535;
    font-size: 14px;
  }

  &:focus {
    outline: none;
  }
`

export const Button = styled.button`
  width: 120px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #FAA500;
  border-radius: 4px;

  background-color: #FAA500;
  color: #FFF;

  font-size: 14px;

  position: relative;
  z-index: 999;

  cursor: pointer;

  &:hover {
    background-color: #FFC673;
    border: 1px solid #FFC673;
  }

  @media (max-width: 768px) {
    width: 60px;

    border: none;

    position: none;
    z-index: none;
  }
`

