import type { AppProps } from 'next/app';
import React, { ReactElement } from 'react';
import { Hydrate } from 'react-query/hydration';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from '@libs/react-query/queryClient';

import '@styles/index.scss';

function App({ Component, pageProps }: AppProps): ReactElement {
  const [client] = React.useState(() => queryClient);

  return (
    <QueryClientProvider client={client}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
export default App;
