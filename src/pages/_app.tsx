import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';

import { queryClient, QueryClientProvider } from '@libs/react-query/client';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import '@styles/index.scss';

function App({ Component, pageProps }: AppProps): React.ReactElement {
  const [client] = React.useState(() => queryClient);

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <QueryClientProvider client={client}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </React.Fragment>
  );
}
export default App;
