import React from 'react';
import { Container } from 'react-bootstrap';

import { DrupalNodePage } from '@libs/types/AppTypes';

function NodePage(props: DrupalNodePage): React.ReactElement {
  const { body } = props;

  return (
    <section className={'node node--page'}>
      {body && (
        <Container className="node__body">
          <div
            dangerouslySetInnerHTML={{
              __html: body.processed,
            }}
          />
        </Container>
      )}
    </section>
  );
}

export default React.memo(NodePage);
