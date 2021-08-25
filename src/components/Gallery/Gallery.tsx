import React from 'react';
import Image from 'next/image';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Row, Col } from 'react-bootstrap';

import galleryImage from '@public/gallery_example.jpg';

SwiperCore.use([Pagination]);

const breakpoints = {
  '640': {
    slidesPerView: 1,
  },
  '768': {
    slidesPerView: 2,
  },
  '1024': {
    slidesPerView: 3,
  },
};

function Gallery(): React.ReactElement {
  return (
    <section className={'gallery'}>
      <Container fluid={'xl'}>
        <Row>
          <Col>
            <h2 className={'gallery__title'}>Galería</h2>
            <p className={'gallery__description'}>
              If a picture says a thousand words, then you can imagine how long
              it would take to describe all our mouthwatering selections.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Swiper
              slidesPerView={1}
              breakpoints={breakpoints}
              pagination={{ clickable: true }}
            >
              <SwiperSlide className={'gallery__item'}>
                <Image src={galleryImage} />
              </SwiperSlide>
              <SwiperSlide className={'gallery__item'}>
                <Image src={galleryImage} />
              </SwiperSlide>
              <SwiperSlide className={'gallery__item'}>
                <Image src={galleryImage} />
              </SwiperSlide>
              <SwiperSlide className={'gallery__item'}>
                <Image src={galleryImage} />
              </SwiperSlide>
              <SwiperSlide className={'gallery__item'}>
                <Image src={galleryImage} />
              </SwiperSlide>
              <SwiperSlide className={'gallery__item'}>
                <Image src={galleryImage} />
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Gallery;
