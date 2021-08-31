import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

import { DrupalNode } from '@libs/types/AppTypes';
import { getResource } from '@queries/getResource';

const fallback: DrupalNode = {
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

interface UseResource<NodeType> {
  node: NodeType;
}

export function useResource<NodeType>(): UseResource<NodeType> {
  const { asPath } = useRouter();
  const { data: node = fallback } = useQuery('node', () => getResource(asPath));

  return {
    node,
  };
}
