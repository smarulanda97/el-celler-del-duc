import { useQuery } from 'react-query';

import { queryKeys } from '@libs/react-query/constants';
import { getGalleryImages } from '@queries/getGalleryImages';
import { DrupalNodeGalleryContent } from '@libs/types/AppTypes';

const fallback: DrupalNodeGalleryContent[] = [];

interface UseGalleryImages {
  nodes: DrupalNodeGalleryContent[];
}

export function useGalleryImages(): UseGalleryImages {
  const { data: nodes = fallback } = useQuery(queryKeys.galleryImages, () =>
    getGalleryImages()
  );

  return {
    nodes,
  };
}
