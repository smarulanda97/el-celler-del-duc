import React from 'react';
import Link from 'next/link';
import { Carousel } from 'react-bootstrap';

import { DrupalBanner } from '@libs/types/AppTypes';

function BannerContent(props: DrupalBanner): React.ReactElement {
  const { field_title, field_subtitle } = props;

  return (
    <>
      <Carousel.Caption className={'banner__caption'}>
        {field_title && <h1 className={'banner__title'}>{field_title}</h1>}
        <span className={'banner__separator'} />
        {field_subtitle && (
          <p className={'banner__description'}>{field_subtitle}</p>
        )}
        <Link href={'/#'}>
          <a className={'scroll-bottom'}>
            <div className={'scroll-bottom__mouse'}>
              <span className={'scroll-bottom__icon'} />
            </div>
          </a>
        </Link>
      </Carousel.Caption>
    </>
  );
}

export default React.memo(BannerContent);
