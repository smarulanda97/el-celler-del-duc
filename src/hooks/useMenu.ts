import { useQuery } from 'react-query';

import { getMenu } from '@queries/index';
import { DrupalMenuLinkContent } from '@libs/types/AppTypes';

interface UseMenu {
  items: DrupalMenuLinkContent[];
}

export function useMenu(name: string, cacheKey: string): UseMenu {
  const { data: items = [] } = useQuery(cacheKey, () => getMenu(name));

  return {
    items,
  };
}
