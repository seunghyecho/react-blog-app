import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer, { rootSaga } from '@/modules';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/lib/styles/globals';
import { sizes } from '@/lib/styles/theme';

import Header from '@/components/common/Layout/Header';

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  /**
   * redux-saga middleware 적용
   */
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

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
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={sizes}>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
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
