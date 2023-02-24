import styled from 'styled-components';

import { MdOutlineArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

export const SliderContainer = styled.div`
  position: relative;
  height: 600px;

  width: 100%;

  
`;

export const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SliderContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 7rem 12rem;

  @media (max-width: 768px) {
    padding: 0;
    justify-content: center;
    padding-left: 60px;
  }
`;

export const SliderTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;

  color: #FFF;

  @media (max-width: 768px) {
    font-size: 30px;
    max-width: 200px;
  }
`;

export const SliderText = styled.p`
  font-size: 20px;
  font-weight: 400;

  max-width: 467px;

  color: #FFF;

  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 239px;
  }
`;

export const ArrowPrev = styled(MdOutlineArrowBackIos)`
  color: #353535;
  font-size: 32px;

  cursor: pointer;

  position: absolute;
  left: 7rem;
  top: 50%;

  @media (max-width: 768px) {
    left: 20px;
  }
`;

export const ArrowNext = styled(MdArrowForwardIos)`
  color: #353535;
  font-size: 32px;

  cursor: pointer;

  position: absolute;
  right: 7rem;
  top: 50%;

  @media (max-width: 768px) {
    right: 20px;
  }
`;

export const Button = styled.button`
  height: 48px;
  width: 128px;

  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #FFF;
  background-color: #FAA500;

  border: 0;

  font-size: 16px;
  font-weight: 700;

  @media (max-width: 768px) {
    height: 28px;
    width: 76px;
    border-radius: 4px;
  }
`