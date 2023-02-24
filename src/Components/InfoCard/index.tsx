import React from 'react';

import { Container, DivContent, Image, Text, Title } from './styles';

import ImageSrc from '../../Assets/Images/NewColection.png'

const InfoCard: React.FC = () => {
  return (
    <Container>
      <DivContent>
        <Title>Lorem ipsum </Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.</Text>
      </DivContent>
      <Image src={ImageSrc}/>
    </Container>
  );
}

export default InfoCard;