import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *,
  html,
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size:16px;
    font-family: 나눔스퀘어, 'NanumSquare', sans-serif; 
  }

  ul,
  li {
    list-style: none;
  }

  .colorEf {
    color: #ef402f;
  }

  .color61 {
    color: #619ffb;
  }

  a {
    color: inherit;
    text-decoration: none;
    color: #222;
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
  input{
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
