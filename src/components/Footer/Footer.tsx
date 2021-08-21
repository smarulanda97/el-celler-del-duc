import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { useMenu } from '@hooks/index';
import { Navigation } from '@components/index';
import { queryKeys } from '@libs/react-query/constants';

function Footer(): React.ReactElement {
  const { items } = useMenu('social', queryKeys.socialMenu);

  return (
    <footer className={'footer'}>
      <Container className={'footer__container'}>
        <Row className={'footer__row'}>
          <Col className={'footer__column'}>
            <Navigation className={'social-nav'} items={items} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
