import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

import { getResource } from '@queries/getResource';
import { DrupalNodeContent } from '@libs/types/AppTypes';

const fallback: DrupalNodeContent = {
  body: {
    value: '',
    format: '',
    summary: '',
    processed: '',
  },
  id: '',
  type: '',
  title: '',
  relationshipNames: [],
};

interface UseResource {
  node: DrupalNodeContent;
}

export function useResource(): UseResource {
  const { asPath } = useRouter();
  const { data: node = fallback } = useQuery('node', () => getResource(asPath));

  return {
    node,
  };
}
