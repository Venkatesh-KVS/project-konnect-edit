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
  .flex-r {
    /* flex-direction: row; */
  }
  .navbar-lists {
    gap: 2.5rem;
    font-size: 1rem;
    font-weight: 500;
  }
  .top-nav {
  justify-content: center;
  align-items: center;
  margin: 15px auto;
}
.register {
  gap: 10px;
}
  .nav-list {
    text-decoration: none;
    color: #fff;
    /* text-transform: uppercase; */
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
