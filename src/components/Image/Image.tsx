import React from 'react';
import { default as NextImage } from 'next/image';

import { DrupalMediaImage } from '@libs/types/AppTypes';
import { getDerivativeImage } from '@utils/getDerivativeImage';

interface ImageProps {
  options?: any;
  imageStyle: string;
  media: DrupalMediaImage;
}

function Image(props: ImageProps): React.ReactElement {
  const { src, alt, width, height } = getDerivativeImage(
    props.media,
    props.imageStyle
  );

  if (!src) {
    return <span>Image broken.</span>;
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      objectFit={'cover'}
      layout={'responsive'}
    />
  );
}

export default Image;
