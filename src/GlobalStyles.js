import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}
html {
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
`;

export default GlobalStyles;
