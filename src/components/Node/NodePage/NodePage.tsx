import React from 'react';

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
    <div className={'node node--page'}>
      {banners && banners.length && (
        <section className={'node__banner'}>
          <Banner banners={banners} />
        </section>
      )}
      {body && (
        <section
          className="node__body"
          dangerouslySetInnerHTML={createBodyMarkup(body)}
        />
      )}
      <h1>Drupal node page</h1>
    </div>
  );
}

export default React.memo(NodePage);
