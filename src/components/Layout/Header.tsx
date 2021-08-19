import { ReactElement } from 'react';
import { Container, Navbar } from 'react-bootstrap';

import Image from 'next/image';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from '../../../public/logo.png';
import { Navigation } from '@components/index';

const mainNav = {
  className: 'main-nav',
  items: [
    {
      id: '13',
      link: '/',
      title: 'Inicio',
    },
    {
      id: '13',
      link: '/',
      title: 'Menú del día',
    },
    {
      id: '13',
      link: '/',
      title: 'Reservas',
    },
    {
      id: '13',
      link: '/',
      title: 'Sobre nosotros',
    },
    {
      id: '13',
      link: '/',
      title: 'Ubicación',
    },
  ],
};

function Header(): ReactElement {
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
            <Navigation {...mainNav} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
