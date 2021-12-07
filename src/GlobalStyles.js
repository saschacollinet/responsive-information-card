import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}
html {
  box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
`;

export default GlobalStyles;
