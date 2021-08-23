import React from 'react';

import { useResource } from '@hooks/useResource';
import { DrupalNodePageContent } from '@libs/types/AppTypes';
import NodePage from '@components/Node/NodePage/NodePage';

function Node(): React.ReactElement {
  const { node } = useResource();

  const renderNodeType = () => {
    if (node?.type && node.type === 'node--page') {
      return <NodePage {...(node as DrupalNodePageContent)} />;
    }

    return <div />;
  };

  return renderNodeType();
}

export default Node;
