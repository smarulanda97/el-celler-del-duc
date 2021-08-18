import type { AppProps } from 'next/app';
import React, { ReactElement } from 'react';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient, QueryClientProvider } from '@libs/react-query/client';

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
