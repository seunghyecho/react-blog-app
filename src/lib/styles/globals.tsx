import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html,
  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    box-sizing: border-box;
    font-size: 14px;
    font-family: 나눔스퀘어, 'NanumSquare', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: inherit;
  }

  html {
    height: 100%;
  }

  ul,
  li {
    list-style: none;
  }

  .primary_red {
    color: #ef402f;
  }

  .primary_blue {
    color: #619ffb;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a:focus {
    outline: none;
    border: none;
  }

  button {
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;
  }

  button:disabled {
    cursor: default;
    fill: #f2f3f4;
  }

  input {
    border: none;
    outline: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-transition: background-color 9999s ease-out;
    -webkit-box-shadow: 0 0 0px 1000px white inset !important;
  }

`;