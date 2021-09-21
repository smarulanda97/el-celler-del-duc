import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Pagination]);

interface SwiperProps {
  items: any[];
  options?: SwiperOptions;
  render: (element: any) => React.ReactElement | null;
}

function SwiperComponent(props: SwiperProps): React.ReactElement | null {
  const { items = [], render, options } = props;

  if (!items.length) {
    return null;
  }

  return (
    <Swiper {...options} pagination={{ clickable: true, dynamicBullets: true }}>
      {items.map((item: any) => (
        <SwiperSlide key={item.id}>{render(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default React.memo(SwiperComponent);
