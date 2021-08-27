import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';

import { getDerivativeImage } from '@utils/index';
import BannerContent from './BannerContent/BannerContent';
import { DrupalBanner, DrupalMediaImage } from '@libs/types/AppTypes';

interface BannerProps {
  banners: DrupalBanner[];
}

function Banner(props: BannerProps): React.ReactElement {
  const { banners } = props;

  const renderImage = (media: DrupalMediaImage) => {
    const { src, alt } = getDerivativeImage(media, 'banner');
    return (
      src && <Image src={src} alt={alt} layout={'fill'} objectFit={'cover'} />
    );
  };

  return (
    <Carousel fade controls={false} indicators={false} className={'banner'}>
      {banners.length &&
        props.banners.map((banner: DrupalBanner) => (
          <Carousel.Item key={banner.id} className={'banner__item'}>
            <div className={'banner__overlay'} />
            {renderImage(banner.field_media)}
            <BannerContent {...banner} />
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default Banner;
