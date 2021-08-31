import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { useParagraph } from '@hooks/index';
import { Image, Swiper } from '@components/index';
import {
  DrupalParagraphGallery,
  DrupalParagraphGalleryItem,
} from '@libs/types/AppTypes';

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
  const {
    field_title,
    field_description,
    field_items = [],
  } = useParagraph<DrupalParagraphGallery>('paragraph--gallery');

  return (
    <section className={'gallery'}>
      <Container fluid={'xl'}>
        <Row>
          <Col>
            {field_title && <h2 className={'gallery__title'}>{field_title}</h2>}
            {field_description && (
              <div
                className={'gallery__description'}
                dangerouslySetInnerHTML={{
                  __html: field_description.processed,
                }}
              />
            )}
          </Col>
        </Row>
      </Container>
      <div className={'gallery__container'}>
        {field_items.length && (
          <Swiper
            breakpoints={breakpoints}
            items={field_items}
            render={(element: DrupalParagraphGalleryItem) => (
              <div className={'gallery__item'}>
                <Image
                  imageStyle={'gallery'}
                  media={element.field_media}
                  options={{ layout: 'responsive' }}
                />
              </div>
            )}
          />
        )}
      </div>
    </section>
  );
}

export default Gallery;
