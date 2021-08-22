import { useQuery } from 'react-query';
import { TJsonApiBody } from 'jsona/lib/JsonaTypes';

import { getMenu } from '@queries/index';
import { deserialize } from '@utils/index';
import { DrupalMenuLinkContent } from '@libs/types/AppTypes';

interface UseMenu {
  items: DrupalMenuLinkContent[];
}

export function useMenu(name: string, cacheKey: string): UseMenu {
  const { data } = useQuery<TJsonApiBody>(cacheKey, () => getMenu(name));

  let items: DrupalMenuLinkContent[] = [];
  if (data) items = deserialize(data);

  return {
    items,
  };
}
