import React from 'react';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';

import { DrupalMenuLinkContent } from '@libs/types/AppTypes';

interface NavigationItemProps {
  item: DrupalMenuLinkContent;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ item }) => {
  const getAttribute = (key: string): any => {
    const attributes = item?.options?.attributes;

    if (!attributes || !{}.hasOwnProperty.call(attributes, key)) {
      return '';
    }

    return attributes[key] instanceof Array
      ? attributes[key][0]
      : attributes[key];
  };

  return (
    <Nav.Item key={item.id}>
      <Link href={item.url} passHref>
        <Nav.Link
          target={getAttribute('target')}
          className={getAttribute('class')}
        >
          <span>{item.title}</span>
        </Nav.Link>
      </Link>
    </Nav.Item>
  );
};

export default NavigationItem;
