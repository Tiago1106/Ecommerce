import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #353535;

  width: 100%;
  height: 24px;

  @media (max-width: 768px) {
    /* padding: 10px 0; */
    height: auto;
  }
`;

export const Text = styled.span`
  font-size: 12px;
  font-weight: 400;

  color: #fff;

  text-align: center;
`
