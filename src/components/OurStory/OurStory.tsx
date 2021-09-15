import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { useParagraph } from '@hooks/useParagraph';
import { DrupalParagraphOurStory } from '@libs/types/AppTypes';
import { Image } from '@components/index';

function OurStory(): React.ReactElement {
  const { field_title, field_description, field_media } =
    useParagraph<DrupalParagraphOurStory>('paragraph--history');

  return (
    <Container as={'section'} className={'our-story'}>
      <Row>
        <Col md={12} lg={6}>
          {field_title && <h3 className={'our-story__title'}>{field_title}</h3>}
          {field_description && (
            <div
              className="our-story__content"
              dangerouslySetInnerHTML={{
                __html: field_description.processed,
              }}
            />
          )}
          <span className={'our-story__ornament'} />
        </Col>
        <Col md={12} lg={6}>
          <div className={'our-story__image'}>
            <Image
              imageStyle={'our_story'}
              media={field_media}
              options={{ layout: 'responsive' }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default OurStory;
