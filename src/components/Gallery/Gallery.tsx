import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { useGalleryImages } from '@hooks/index';
import { Image, Swiper } from '@components/index';

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
        <Row>
          <Col>
            <Swiper
              items={nodes}
              breakpoints={{
                '640': {
                  slidesPerView: 1,
                },
                '768': {
                  slidesPerView: 2,
                },
                '1024': {
                  slidesPerView: 3,
                },
              }}
              render={(element) => (
                <div className={'gallery__item'}>
                  <Image media={element.field_media} imageStyle={'gallery'} />
                </div>
              )}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Gallery;
