import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
  
  body {
    margin: 0;
    padding: 0; 
  }
  .container {
    padding: 0;
    max-width: 75rem;
  }
  h2 {
    font-size: 2rem;
    font-weight: 700;
  }
  .para {
    font-size: 1rem;
    color: #00203c;
    margin: 0;
  }
  .paraH3 {
    font-size: 1.5rem;
    font-weight: 700;
    /* color: #00203c; */
    margin-bottom: 1.5rem;
  }
`;
