import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { GetServerSidePropsContext, NextPage } from 'next';

import { getMenu, getResource } from '@queries/index';
import { queryKeys } from '@libs/react-query/constants';
import { getPathFromContext } from '@utils/getPathFromContext';
import { App, Banner, Gallery, Location, Node } from '@components/index';

const HomePage: NextPage<any> = () => {
  return (
    <App>
      <Banner />
      <Node />
      {/*<OpeningHour />*/}
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
