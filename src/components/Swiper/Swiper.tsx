import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  DrupalNodeGalleryContent,
  ListItem,
  SwiperBreakpoint,
} from '@libs/types/AppTypes';

SwiperCore.use([Pagination]);

interface SwiperProps {
  breakpoints: SwiperBreakpoint;
  items: ListItem[] | DrupalNodeGalleryContent[];
  render: (element: ListItem) => React.ReactElement | null;
}

function SwiperComponent(props: SwiperProps): React.ReactElement | null {
  const { items = [], breakpoints, render } = props;

  if (!items.length) {
    return null;
  }

  return (
    <Swiper
      preloadImages
      spaceBetween={30}
      breakpoints={breakpoints}
      pagination={{ clickable: true, dynamicBullets: true }}
    >
      {items.map((item: any) => (
        <SwiperSlide key={item.id}>{render(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default React.memo(SwiperComponent);
