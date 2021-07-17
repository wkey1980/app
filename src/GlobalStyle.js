// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    outline: 1px solid red;
}

html {
    font-size: 100%;
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

body {
    background-color: teal;
}

`;

export default GlobalStyle;