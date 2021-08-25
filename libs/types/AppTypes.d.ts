import { SwiperOptions } from 'swiper';

interface DrupalPath {
  pid: number;
  alias: string;
  langcode: string;
}

interface imageDerivatives {
  links: {
    [key: string]: {
      href: string;
    };
  };
}

interface DrupalImage {
  id: string;
  type: string;
  resourceIdObjMeta: {
    alt: string;
    height: number;
    width: number;
    imageDerivatives: imageDerivatives;
  };
}

interface DrupalMediaImage {
  field_media_image: DrupalImage;
  field_media_image_mobile: DrupalImage;
}

interface DrupalBanner {
  id: string;
  field_title: string;
  field_subtitle: string;
  relationshipNames: string[];
  field_media: DrupalMediaImage;
}

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

export interface DrupalBodyField {
  value: string;
  format: string;
  processed: string;
  summary: string;
}

export interface DrupalNodeContent {
  id: string;
  type: string;
  title: string;
  path?: DrupalPath;
  body?: DrupalBodyField;
  relationshipNames: string[];
}

export interface DrupalNodePageContent extends DrupalNodeContent {
  field_banner?: DrupalBanner[];
}

export interface DrupalNodeGalleryContent extends DrupalNodeContent {
  field_media?: DrupalMediaImage;
}

export type AccessToken = {
  expires: number;
  token_type: string;
  access_token: string;
};

export interface SwiperBreakpoint {
  [width: number]: SwiperOptions;
  [ratio: string]: SwiperOptions;
}

export interface ListItem {
  id: string;
  field_media: DrupalMediaImage;
}
