import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  padding-left: 24px;
  border-radius: 10px;

  width: 49rem;
  height: 40px;

  background-color: #EFEFEF;

  @media (max-width: 1440px) {
    width: auto;
    max-width: 30rem;
  }

  @media (max-width: 768px) {
    display: none;
  }

  `;

export const Input = styled.input`
  width: 100%;
  height: 100%;

  padding: 0;
  margin: 0;
  border: 0;

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

  border: 0;
  border-radius: 10px;

  background-color: #FAA500;
  color: #FFF;

  font-size: 14px;
`
