import React from 'react';
import { default as NextImage } from 'next/image';

import { getDerivativeImage } from '@utils/index';
import { DrupalMediaImageField } from '@libs/types/AppTypes';

interface ImageProps {
  imageStyle: string;
  media: DrupalMediaImageField;
  options: {
    layout: string;
    objectFit?: string;
    priority?: boolean;
  };
}

function Image(props: ImageProps): React.ReactElement {
  const {
    options = {
      layout: 'responsive',
    },
  } = props;
  const { src, alt, width, height } = getDerivativeImage(
    props.media,
    props.imageStyle
  );

  if (!src) {
    return <span>Image broken.</span>;
  }

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <NextImage
      src={src}
      alt={alt}
      quality={90}
      lazyBoundary={'300px'}
      {...props.options}
      {...(options.layout !== 'fill' ? { width: width, height: height } : {})}
    />
  );
}

export default Image;
