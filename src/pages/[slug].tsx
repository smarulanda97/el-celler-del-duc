import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next';
import { useResource } from '@hooks/useResource';

const Node: NextPage<any> = () => {
  const node = useResource();

  return <h1>page</h1>;
};

export async function getServerSideProps(
  context: GetServerSideProps
): Promise<GetServerSidePropsResult<any>> {
  const client = new QueryClient();

  console.log(context);

  return {
    props: {
      dehydratedState: dehydrate(client),
    },
  };
}

export default Node;
