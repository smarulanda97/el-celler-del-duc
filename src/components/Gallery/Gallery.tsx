import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { useParagraph } from '@hooks/index';
import { getGalleryOptions } from '@utils/index';
import { Image, Swiper } from '@components/index';
import { DPGallery, DPGalleryItem } from '@libs/types/AppTypes';

function Gallery(): React.ReactElement {
  const options = getGalleryOptions();
  const {
    field_title,
    field_items = [],
    field_description,
  } = useParagraph<DPGallery>('paragraph--gallery');

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
            options={options}
            items={field_items}
            render={(element: DPGalleryItem) => (
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
