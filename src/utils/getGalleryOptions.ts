import { SwiperOptions } from 'swiper';
import { isMobile } from 'react-device-detect';

export function getGalleryOptions(): SwiperOptions {
  const options = {
    spaceBetween: 0,
    preloadImages: true,
  };

  if (isMobile) {
    return {
      ...options,
      breakpoints: {
        '640': {
          slidesPerView: 1,
        },
        '768': {
          slidesPerView: 2,
        },
        '1024': {
          slidesPerView: 2,
        },
      },
    };
  }

  return {
    ...options,
    slidesPerView: 3,
    slidesPerGroup: 3,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
  };
}
