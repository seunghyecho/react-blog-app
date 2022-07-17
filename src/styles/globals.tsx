import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    *,
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}


    ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
h1{
    font-size: 2em;
}
h2 {
  font-size: 1.8em;
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

    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    html{
        font-size: 11px;
        -webkit-text-size-adjust: none;
        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       
        font-display: fallback;
        ${media.tablet}{
            font-size: 10px;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }

    .pc-tablet-only {
        display: block;
        ${media.mobile} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
        ${media.tablet}{
            display:block;
        }
    }
    .mobile-only {
        display: none;
        ${media.mobile} {
            display: block;
        }
    }
`;
