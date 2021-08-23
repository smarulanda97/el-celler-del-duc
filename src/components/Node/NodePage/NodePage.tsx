import React from 'react';

import { Banner } from '@components/index';
import { DrupalNodePageContent } from '@libs/types/AppTypes';

function NodePage(props: DrupalNodePageContent): React.ReactElement {
  const { field_banner: banners } = props;

  return (
    <>
      {banners && banners.length && <Banner banners={banners} />}
      <h1>Drupal node page</h1>
    </>
  );
}

export default React.memo(NodePage);
