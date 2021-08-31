import { DrupalMediaImageField } from '@libs/types/AppTypes';

interface GetDerivativeImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const fallback = {
  src: '',
  alt: '',
  width: 0,
  height: 0,
};

export function getDerivativeImage(
  media: DrupalMediaImageField,
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
    width: media.field_media_image.resourceIdObjMeta.width,
    height: media.field_media_image.resourceIdObjMeta.height,
  };
}
