import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root{
    --primary: #5928e5; 
    --white: #fffffe; 
    --grey: #94a1b2; 
    --secondary: #72757e; 
    --tertiary: #2cb67d; 
    --background-1: #16161a; 
    --background-2: #242629; 
    --button-background: #7f5af0; 
    --headline1: 700 4.5rem/5rem Arvo; 
    --headline2: 700 4rem/4.75rem Arvo; 
    --headline3: 700 2rem/2rem Arvo; 
    --headline4: 700 1.5rem/1.649999976158142rem Arvo; 
    --button: 400 1.125rem/1.6875rem Arvo; 
    --caption: 400 0.75rem/1.6875rem Arvo; 
    --headline5: 700 1.25rem/1.649999976158142rem Arvo; 
    --body1-regular: 400 1.125rem/1.6875rem Arvo; 
    --body1-bold: 700 1.125rem/1.6875rem Arvo; 
    --body2-regular: 400 0.875rem/1.6875rem Arvo; 
    --body2-bold: 700 0.875rem/1.6875rem Arvo; 
  }

  body{
    background: var(--background-1);
    color: var(--white);
    font: var(--headline2);
    margin: 0;
  }
`;

export default GlobalStyle;