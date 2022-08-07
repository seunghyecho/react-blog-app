import React, { useState, useEffect } from "react";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/globals";
import { media } from "@/styles/theme";
import { UsersProvider } from "@/util/usersContext";

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
          <UsersProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </UsersProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
