import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  margin: 50px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const DivContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  margin-right: 60px;
  max-width: 420px;

  padding-left: 20px;

  @media (max-width: 768px) {
    padding: 0;
    margin-right: 0;
    
    max-width: none;
    
    margin-bottom: 20px;
  }
`

export const Title = styled.span`
  font-size: 24px;
  font-weight: 700;

  color: #000;
`

export const Text = styled.span`
  font-size: 14px;
  font-weight: 400;

  color: #000;
`

export const Image = styled.img`
  max-width: 55%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`
