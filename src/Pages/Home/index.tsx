import React from 'react';

import { Container } from './styles';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import Offers from '../../Components/Offers';

import SliderComponent from '../../Components/Slider';
import WhyBuy from '../../Components/WhyBuy';
import PartnerBrands from '../../Components/PartnerBrands';
import SliderShelf from '../../Components/SliderShelf';
import InfoCard from '../../Components/InfoCard'

import { CONTENTS_SLIDER, CONTENTS_WHYBUY, CONTENT_SHELFS } from './contents'

const Home: React.FC = () => {
  return (
    <Container>
      <Offers />
      <Header />
      <SliderComponent contents={CONTENTS_SLIDER}/>
      <WhyBuy contents={CONTENTS_WHYBUY}/>
      <PartnerBrands />
      <SliderShelf contents={CONTENT_SHELFS}/>
      <InfoCard />
      <Footer />
    </Container>
  );
}

export default Home;