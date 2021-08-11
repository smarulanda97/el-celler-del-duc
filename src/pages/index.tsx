import { QueryClient } from 'react-query';
import { GetStaticProps, NextPage } from 'next';
import { dehydrate } from 'react-query/hydration';

const HomePage: NextPage<any> = () => {
  return (
    <div>
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
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
