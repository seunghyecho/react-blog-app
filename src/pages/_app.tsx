import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/globals';
import { sizes } from '@/styles/theme';
import { UsersProvider } from '@/util/usersContext';
import Header from '@/components/common/Layout/Header';

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={sizes}>
        <UsersProvider>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
        </UsersProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});
