import React from 'react';
import { Carousel } from 'react-bootstrap';

import { useResource } from '@hooks/index';
import { Image, BannerContent } from '@components/index';
import { DrupalNodePage, DrupalBannerField } from '@libs/types/AppTypes';

function Banner(): React.ReactElement {
  const {
    node: { field_banner = [] },
  } = useResource<DrupalNodePage>();

  return (
    <Carousel fade controls={false} indicators={false} className={'banner'}>
      {field_banner.length &&
        field_banner.map((banner: DrupalBannerField) => (
          <Carousel.Item key={banner.id} className={'banner__item'}>
            <div className={'banner__overlay'} />
            <Image imageStyle={'banner'} media={banner.field_media} />
            <BannerContent {...banner} />
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default Banner;
