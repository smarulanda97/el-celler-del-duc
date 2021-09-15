import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SwiperBreakpoint } from '@libs/types/AppTypes';

SwiperCore.use([Pagination]);

interface SwiperProps {
  items: any[];
  breakpoints: SwiperBreakpoint;
  render: (element: any) => React.ReactElement | null;
}

function SwiperComponent(props: SwiperProps): React.ReactElement | null {
  const { items = [], breakpoints, render } = props;

  if (!items.length) {
    return null;
  }

  return (
    <Swiper
      preloadImages
      spaceBetween={0}
      slidesPerColumn={2}
      slidesPerView={3}
      slidesPerGroup={3}
      breakpoints={breakpoints}
      slidesPerColumnFill={'row'}
      pagination={{ clickable: true, dynamicBullets: true }}
    >
      {items.map((item: any) => (
        <SwiperSlide key={item.id}>{render(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default React.memo(SwiperComponent);
