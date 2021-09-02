import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { GetServerSidePropsContext, NextPage } from 'next';

import { getPathFromContext } from '@utils/index';
import { getMenu, getResource } from '@queries/index';
import { queryKeys } from '@libs/react-query/constants';
import {
  App,
  Banner,
  Gallery,
  Location,
  Node,
  OpeningHours,
} from '@components/index';

const HomePage: NextPage<any> = () => {
  return (
    <App>
      <Banner />
      <Node />
      <OpeningHours />
      <br />
      <br />
      <br />
      <h1>Cambio</h1>
      
      <Gallery />
      <Location />
    </App>
  );
};

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<any> {
  const client = new QueryClient();
  const path: string = getPathFromContext(context) as string;

  await client.prefetchQuery(queryKeys.node, () => getResource(path));
  await client.prefetchQuery(queryKeys.mainMenu, () => getMenu('main'));
  await client.prefetchQuery(queryKeys.socialMenu, () => getMenu('social'));

  return {
    props: {
      dehydratedState: dehydrate(client),
    },
  };
}

export default HomePage;
