import React from 'react';
import { Nav } from 'react-bootstrap';

import NavigationItem from './NavigationItem/NavigationItem';
import { DrupalMenuLinkContent } from '@libs/types/AppTypes';

interface NavigationProps {
  className: string;
  items: DrupalMenuLinkContent[];
}

const Navigation: React.FC<NavigationProps> = (props) => {
  const { className, items = [] } = props;

  if (!items.length) {
    return null;
  }

  return (
    <Nav className={className}>
      {items.map((item) => (
        <NavigationItem key={item.id} item={item} />
      ))}
    </Nav>
  );
};

export default Navigation;
