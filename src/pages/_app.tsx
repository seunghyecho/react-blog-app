import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globals";
import { media } from "../styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  }

  return (
    <>
      <Head>
        <title>My blog app</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={media}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
