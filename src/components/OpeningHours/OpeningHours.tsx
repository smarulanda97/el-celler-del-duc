import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import { Image, OpeningHoursItem } from '@components/index';
import { useParagraph } from '@hooks/index';
import { DrupalParagraphOpenHours } from '@libs/types/AppTypes';

function OpeningHours(): React.ReactElement {
  const {
    field_title,
    field_media,
    field_subtitle,
    field_items = [],
  } = useParagraph<DrupalParagraphOpenHours>('paragraph--opening_hours');

  return (
    <section className={'o-hours'}>
      <div className={'o-hours__bg'}>
        {field_media && (
          <Image
            media={field_media}
            imageStyle={'opening_hours'}
            options={{
              layout: 'fill',
              objectFit: 'cover',
            }}
          />
        )}
      </div>
      <Container>
        <Row>
          <Col>
            {field_title && <h2 className={'o-hours__title'}>{field_title}</h2>}
            {field_subtitle && (
              <h3 className={'o-hours__subtitle'}>{field_subtitle}</h3>
            )}
          </Col>
        </Row>
        <Row>
          {field_items.map((item) => (
            <OpeningHoursItem key={item.id} {...item} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default React.memo(OpeningHours);
