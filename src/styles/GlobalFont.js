import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalFont = createGlobalStyle`
${reset}

body {
    font-family: 'AirbnbCereal', sans-serif;
}

`;

export default GlobalFont;
