import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { legacy_createStore as createStore  } from 'redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/lib/styles/globals';
import { sizes } from '@/lib/styles/theme';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '@/modules';

import Header from '@/components/common/Layout/Header';

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  const reduxCreateStore = createStore(rootReducer, composeWithDevTools())
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
    <ReduxProvider store={reduxCreateStore}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={sizes}>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
}

export default MyApp;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
});
