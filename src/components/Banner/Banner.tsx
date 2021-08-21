import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';

import banner1 from '@public/banner_1.jpg';

function Banner(): React.ReactElement {
  return (
    <Carousel fade controls={false} className={'banner'}>
      <Carousel.Item className={'banner__item'}>
        <div className={'banner__overlay'} />
        <Image src={banner1} layout={'fill'} objectFit={'cover'} />
        <Carousel.Caption className={'banner__caption'}>
          <h1 className={'banner__title'}>El Celler Del Duc</h1>
          <span className={'banner__separator'} />
          <p className={'banner__description'}>
            The Chef creates divine combinations
          </p>
          <Link href={'/#'}>
            <a className={'scroll-bottom'}>
              <div className={'scroll-bottom__mouse'}>
                <span className={'scroll-bottom__icon'} />
              </div>
            </a>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
