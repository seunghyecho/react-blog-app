import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import { HelmetProvider } from 'react-helmet-async';
import rootReducer, { rootSaga } from '@/modules';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/lib/styles/globals';
import { sizes } from '@/lib/styles/theme';
import HeaderContainer from '@/containers/common/HeaderContainer';
import { tempSetUser, check } from '@/modules/user';




function MyApp({ Component, pageProps }) {
  /**
   * TODO react-hydration-error
   */
  const [showChild, setShowChild] = useState(false);
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  const loadUser = () => {
    try {
      const user = localStorage.getItem('user');
      if (!user) return;

      store.dispatch(tempSetUser(JSON.parse(user)));
      store.dispatch(check());
    } catch (e) {
      console.log('localStorage is not working');
    }
  };

  sagaMiddleware.run(rootSaga);
  loadUser();

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
    <HelmetProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={sizes}>
            <GlobalStyle />
            <Head>
              <title>React Blog App</title>
            </Head>
            <HeaderContainer />
            <Component {...pageProps} />
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </HelmetProvider>
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
