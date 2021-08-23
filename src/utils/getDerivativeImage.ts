import { DrupalMediaImage } from '@libs/types/AppTypes';

interface GetDerivativeImage {
  src: string;
  alt: string;
}

const fallback = {
  src: '',
  alt: '',
};

export function getDerivativeImage(
  media: DrupalMediaImage,
  imageStyle: string
): GetDerivativeImage {
  const image =
    media?.field_media_image?.resourceIdObjMeta?.imageDerivatives?.links;

  if (!image || !image[imageStyle]) {
    return fallback;
  }

  return {
    ...fallback,
    src: image[imageStyle].href,
    alt: media.field_media_image.resourceIdObjMeta.alt || '',
  };
}
