import React from 'react';
import Image from 'next/image';
import { Col, Row, Container } from 'react-bootstrap';

import background from '@public/background_opening_hours.jpg';

function OpeningHour(): React.ReactElement {
  return (
    <section className={'o-hours'}>
      <div className={'o-hours__bg'}>
        <Image src={background} layout={'fill'} />
      </div>
      <Container>
        <Row>
          <Col>
            <h2 className={'o-hours__title'}>Horarios de apertura</h2>
            <h3 className={'o-hours__subtitle'}>Call For Reservations</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <h4 className={'o-hours__subtitle o-hours__subtitle--days'}>
              Sunday to Tuesday
            </h4>
          </Col>
          <Col xs={12} md={6}>
            <h4 className={'o-hours__subtitle o-hours__subtitle--days'}>
              Friday and Saturday
            </h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OpeningHour;
