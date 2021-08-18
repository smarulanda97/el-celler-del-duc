import { ReactElement } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

import Link from 'next/link';
import Image from 'next/image';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from '../../../public/logo.png';

function Header(): ReactElement {
  return (
    <header className="header">
      <Navbar>
        <Container fluid>
          <Navbar.Brand>
            <Image src={logo} />
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav>
              <Nav.Item>
                <Link href={'/'}>
                  <Nav.Link>
                    <span>Home</span>
                  </Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href={'/'}>
                  <Nav.Link>
                    <span>Home</span>
                  </Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href={'/'}>
                  <Nav.Link>
                    <span>About</span>
                  </Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href={'/'}>
                  <Nav.Link>
                    <span>Menu</span>
                  </Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href={'/'}>
                  <Nav.Link>
                    <span>Location</span>
                  </Nav.Link>
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
