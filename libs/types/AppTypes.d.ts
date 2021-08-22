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
