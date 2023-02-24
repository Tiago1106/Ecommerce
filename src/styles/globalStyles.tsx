import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Titillium Web';
    src: url('../Assets/Fonts/TitilliumWeb-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Titillium Web';
    src: url('../Assets/Fonts/TitilliumWeb-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  
  body {
    margin: 0;
    padding: 0;
    background: #FFFFFF;
    line-height: 1.5;
    font-family: 'Titillium Web', sans-serif;
  }
`;
 
export default GlobalStyle;