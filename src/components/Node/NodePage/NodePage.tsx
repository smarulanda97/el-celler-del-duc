import React from 'react';
import { Container } from 'react-bootstrap';

import { DrupalBodyField, DrupalNodePage } from '@libs/types/AppTypes';

function createBodyMarkup(body: DrupalBodyField): { __html: string } {
  return {
    __html: body.processed,
  };
}

function NodePage(props: DrupalNodePage): React.ReactElement {
  const { body } = props;

  return (
    <section className={'node node--page'}>
      {body && (
        <Container className="node__body">
          <div dangerouslySetInnerHTML={createBodyMarkup(body)} />
        </Container>
      )}
    </section>
  );
}

export default React.memo(NodePage);
