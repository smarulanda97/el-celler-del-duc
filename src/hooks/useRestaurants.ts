import { useQuery } from 'react-query';

import { queryKeys } from '@libs/react-query/constants';
import { getRestaurants } from '@queries/getRestaurants';
import { DrupalTaxonomyTermRestaurant } from '@libs/types/AppTypes';

const fallback: DrupalTaxonomyTermRestaurant[] = [];

interface UseRestaurants {
  terms: DrupalTaxonomyTermRestaurant[];
}

export function useRestaurants(): UseRestaurants {
  const { data: terms = fallback } = useQuery(
    queryKeys.restaurants,
    getRestaurants
  );

  return {
    terms,
  };
}
