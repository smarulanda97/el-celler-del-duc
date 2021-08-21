import React from 'react';
import Image from 'next/image';
import { Container, Navbar } from 'react-bootstrap';

import logo from '@public/logo.png';
import { useMenu } from '@hooks/index';
import { Navigation } from '@components/index';
import { queryKeys } from '@libs/react-query/constants';

function Header(): React.ReactElement {
  const { items } = useMenu('main', queryKeys.mainMenu);

  return (
    <header className={'header'}>
      <Navbar
        expand={'lg'}
        bg={'dark-transparent'}
        className={'header__navbar'}
      >
        <Container fluid className={'header__container'}>
          <Navbar.Brand className={'header__brand'}>
            <Image src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={'main-navbar'} />
          <Navbar.Collapse className={'header__collapse'} id={'main-navbar'}>
            <Navigation className={'main-nav'} items={items} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
