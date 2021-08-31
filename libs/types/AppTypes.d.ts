import { SwiperOptions } from 'swiper';

export interface DrupalLinkAttributes {
  attributes: {
    [key: string]: string | [];
  };
}

export interface DrupalMenuLinkContent {
  description: string;
  enabled: boolean;
  expanded: boolean;
  id: string;
  menu_name: string;
  meta: Record<string, unknown>;
  options: DrupalLinkAttributes;
  parent: string;
  provider: string;
  route: {
    name: string;
    parameters: Record<string, unknown>;
  };
  title: string;
  type: string;
  url: string;
  weight: string;
  items?: DrupalMenuLinkContent[];
}

interface DrupalImageDerivatives {
  links: {
    [key: string]: {
      href: string;
    };
  };
}

interface DrupalImageField {
  id: string;
  type: string;
  resourceIdObjMeta: {
    alt: string;
    height: number;
    width: number;
    imageDerivatives: DrupalImageDerivatives;
  };
}

interface DrupalMediaImageField {
  field_media_image: DrupalImageField;
  field_media_image_mobile?: DrupalImageField;
}

interface DrupalBannerField {
  id: string;
  field_title: string;
  field_subtitle: string;
  relationshipNames: string[];
  field_media: DrupalMediaImageField;
}

interface DrupalPathField {
  pid: number;
  alias: string;
  langcode: string;
}

export interface DrupalBodyField {
  value: string;
  format: string;
  processed: string;
  summary: string;
}

export interface DrupalNode {
  id: string;
  type: string;
  title: string;
  path?: DrupalPathField;
  body?: DrupalBodyField;
  relationshipNames: string[];
}

export interface DrupalNodePage extends DrupalNode {
  field_banner?: DrupalBannerField[];
}

//

//

//

//
// export interface DrupalGeoLocationField {
//   lat: number;
//   lng: number;
//   data: any[];
//   value: string;
// }
//
// export interface DrupalNodeGalleryContent extends DrupalNodeContent {
//   field_media?: DrupalMediaImageField;
// }
//
// export interface DrupalTaxonomyTerm {
//   id: string;
//   type: string;
//   name: string;
//   description: DrupalBodyField;
// }
//
// export interface DrupalTaxonomyTermRestaurant extends DrupalTaxonomyTerm {
//   field_geolocation: DrupalGeoLocationField;
// }
//
// export type AccessToken = {
//   expires: number;
//   token_type: string;
//   access_token: string;
// };
//
// export interface SwiperBreakpoint {
//   [width: number]: SwiperOptions;
//   [ratio: string]: SwiperOptions;
// }
//
// export interface ListItem {
//   id: string;
//   field_media: DrupalMediaImageField;
// }
