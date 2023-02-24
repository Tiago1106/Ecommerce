import React, { useState } from 'react';

import { SliderContainer, SliderContent, SliderImage, SliderText, SliderTitle, ArrowNext, ArrowPrev, Button } from './styles'

type SliderProps = {
  contents: {
    title: string;
    text: string;
    imageUrl: string;
  }[];
};

const Slider: React.FC<SliderProps> = ({ contents }) => {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const currentContent = contents[currentContentIndex];

  const handleNextSlider = () => {
    const nextIndex = (currentContentIndex + 1) % contents.length;
    setCurrentContentIndex(nextIndex);
  };

  const handlePreviusSlider = () => {
    const prevIndex = currentContentIndex === 0 ? contents.length - 1 : currentContentIndex - 1;
    setCurrentContentIndex(prevIndex);
  };

  return (
    <SliderContainer>
      <SliderImage src={currentContent.imageUrl} alt={currentContent.title} />
      <SliderContent>
        <SliderTitle>{currentContent.title}</SliderTitle>
        <SliderText>{currentContent.text}</SliderText>
        <Button>Conferir</Button>
        <ArrowNext onClick={handleNextSlider} />
        <ArrowPrev onClick={handlePreviusSlider} />
      </SliderContent>
    </SliderContainer>
  );
};

export default Slider;