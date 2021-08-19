import React from 'react';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';

interface NavigationItemProps {
  item: any;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ item }) => {
  return (
    <Nav.Item key={item.id}>
      <Link href={item.link} passHref>
        <Nav.Link className={''}>
          {!item.icon && <span>{item.title}</span>}
        </Nav.Link>
      </Link>
    </Nav.Item>
  );
};

export default NavigationItem;
