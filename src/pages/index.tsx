import { QueryClient } from 'react-query';
import { GetStaticProps, NextPage } from 'next';
import { dehydrate } from 'react-query/hydration';

import { App } from '@components/index';

const HomePage: NextPage<any> = () => {
  return (
    <App>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div />
    </App>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  // await  queryClient.prefetchQuery('key', fetchQuery)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default HomePage;
