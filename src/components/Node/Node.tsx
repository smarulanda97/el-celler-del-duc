import React from 'react';

import { useResource } from '@hooks/index';
import { NodePage } from '@components/index';
import { DrupalNode, DrupalNodePage } from '@libs/types/AppTypes';

function Node(): React.ReactElement {
  const { node } = useResource<DrupalNode>();

  const renderNodeType = () => {
    if (node.type === 'node--page') {
      return <NodePage {...(node as DrupalNodePage)} />;
    }

    return <div />;
  };

  return renderNodeType();
}

export default Node;
