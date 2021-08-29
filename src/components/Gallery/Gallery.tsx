import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { useGalleryImages } from '@hooks/index';
import { Image, Swiper } from '@components/index';

const breakpoints = {
  '640': {
    slidesPerView: 2,
  },
  '768': {
    slidesPerView: 2,
  },
  '1024': {
    slidesPerView: 3,
  },
};

function Gallery(): React.ReactElement {
  const { nodes } = useGalleryImages();

  return (
    <section className={'gallery'}>
      <Container fluid={'xl'}>
        <Row>
          <Col>
            <h2 className={'gallery__title'}>Galería</h2>
            <p className={'gallery__description'}>
              Utilizamos productos frecos y de calidad, nuestra cocina se
              caracteriza por hacerse en el momento.
            </p>
          </Col>
        </Row>
      </Container>
      <div className={'gallery__container'}>
        <Swiper
          items={nodes}
          breakpoints={breakpoints}
          render={(element) => (
            <div className={'gallery__item'}>
              <Image media={element.field_media} imageStyle={'gallery'} />
            </div>
          )}
        />
      </div>
    </section>
  );
}

export default Gallery;
