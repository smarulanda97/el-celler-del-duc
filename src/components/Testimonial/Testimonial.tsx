import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { useParagraph } from '@hooks/index';
import { Image, Swiper } from '@components/index';
import { DrupalParagraphTestimonials } from '@libs/types/AppTypes';

const items = [
  {
    id: 1,
    title: 'Awesome to work with',
    author: 'John Berthier',
    description: `Awesome to work with. Incredibly organized, easy to communicate
      with, responsive with next iterations, and beautiful work. It’s
      great to work with someone so open-minded and responsive. Thank
      you!`,
  },
  {
    id: 2,
    title: 'Applicake chocolate cake',
    author: 'Alexander Smith',
    description: `Applicake chocolate cake wafer toffee pie soufflé wafer. Tart
      marshmallow wafer macaroon cheesecake jelly. Gingerbread cookie
      soufflé sweet roll sweet roll jelly-o.Applicak`,
  },
];

function Testimonial(): React.ReactElement {
  const { field_title, field_media } =
    useParagraph<DrupalParagraphTestimonials>('paragraph--testimonials');

  return (
    <section className={'testimonial'}>
      <div className={'testimonial__bg'}>
        <Image
          media={field_media}
          imageStyle={'testimonials'}
          options={{
            layout: 'fill',
            objectFit: 'cover',
          }}
        />
      </div>
      <Container className={'testimonial__container'}>
        <Row className={'align-self-center'}>
          <Col>
            <div className={'testimonial__img'} />
            {field_title && (
              <h2 className={'testimonial__title'}>{field_title}</h2>
            )}
            <Swiper
              items={items}
              render={(element) => (
                <div key={element.id} className={'testimonial__content'}>
                  <p className={'testimonial__desc'}>
                    {element.description}
                    <span className={'testimonial__icon'}>”</span>
                  </p>
                  <span className={'testimonial__author'}>
                    - {element.author}
                  </span>
                </div>
              )}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonial;
