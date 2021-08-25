import React from 'react';
import { Container } from 'react-bootstrap';

import { Banner } from '@components/index';
import { DrupalBodyField, DrupalNodePageContent } from '@libs/types/AppTypes';

function createBodyMarkup(body: DrupalBodyField): { __html: string } {
  return {
    __html: body.processed,
  };
}

function NodePage(props: DrupalNodePageContent): React.ReactElement {
  const { field_banner: banners, body } = props;

  return (
    <section className={'node node--page'}>
      {banners && banners.length && (
        <div className={'node__banner'}>
          <Banner banners={banners} />
        </div>
      )}
      {body && (
        <Container className="node__body">
          <div dangerouslySetInnerHTML={createBodyMarkup(body)} />
        </Container>
      )}
    </section>
  );
}

export default React.memo(NodePage);
