import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { Navigation } from '@components/index';

const socialNav = {
  className: 'social-nav',
  items: [
    {
      id: '1',
      link: '/',
      title: 'Facebook',
    },
    {
      id: '2',
      link: '/',
      title: 'Instagram',
    },
    {
      id: '3',
      link: '/',
      title: 'WhatsApp',
    },
  ],
};

function Footer(): React.ReactElement {
  return (
    <footer className={'footer'}>
      <Container className={'footer__container'}>
        <Row className={'footer__row'}>
          <Col className={'footer__column'}>
            <Navigation {...socialNav} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
