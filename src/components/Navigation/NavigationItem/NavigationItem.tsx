import React from 'react';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';

import { DrupalMenuLinkContent } from '@libs/types/AppTypes';

interface NavigationItemProps {
  item: DrupalMenuLinkContent;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ item }) => {
  return (
    <Nav.Item key={item.id}>
      <Link href={item.url} passHref>
        <Nav.Link className={''}>
          <span>{item.title}</span>
        </Nav.Link>
      </Link>
    </Nav.Item>
  );
};

export default NavigationItem;
