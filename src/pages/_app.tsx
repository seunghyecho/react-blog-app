import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globals";
import { media } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={media}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
