import React from 'react';

import { Container, Content, ContentRow, ContentTexts, Icon, TextContent, Title, TitleContent, ContentMobile } from './styles';

type WhyBuyProps = {
  contents: {
    title: string;
    text: string;
    imageUrl: string;
  }[];
};

const WhyBuy: React.FC<WhyBuyProps> = ({ contents }) => {
  return (
    <Container>
      <Title>Por que comprar na Maeztra?</Title>
      <ContentRow>
        {contents.map((content, index) => (
          <Content key={index}>
            <Icon src={content.imageUrl}/>
            <ContentTexts>
              <TitleContent>{content.title}</TitleContent>
              <TextContent>{content.text}</TextContent>
            </ContentTexts>
          </Content>
        ))}
      </ContentRow>
      <ContentMobile>
        <Icon src={contents[0].imageUrl}/>
        <ContentTexts>
          <TitleContent>{contents[0].title}</TitleContent>
          <TextContent>{contents[0].text}</TextContent>
        </ContentTexts>
      </ContentMobile>
    </Container>
  );
}

export default WhyBuy;