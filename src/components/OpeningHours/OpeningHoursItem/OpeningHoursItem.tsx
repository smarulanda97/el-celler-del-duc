import React from 'react';
import { DrupalParagraphOpenHoursItem } from '@libs/types/AppTypes';
import { Col } from 'react-bootstrap';

type OpeningHoursItemProps = DrupalParagraphOpenHoursItem;

function OpeningHoursItem(props: OpeningHoursItemProps): React.ReactElement {
  const { id, field_title, field_subtitle } = props;

  return (
    <Col xs={12} md={6} key={id} className={'o-hours__column'}>
      {field_title && (
        <h4 className={'o-hours__subtitle o-hours__subtitle--days'}>
          {field_title}
        </h4>
      )}
      {field_subtitle && (
        <p className={'o-hours__subtitle o-hours__subtitle--hours'}>
          {field_subtitle}
        </p>
      )}
    </Col>
  );
}

export default OpeningHoursItem;
