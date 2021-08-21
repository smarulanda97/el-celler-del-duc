import { axios } from '@libs/axios';

const MENU_JSON_API = '/jsonapi/menu_items/';

export async function getMenu(name: string): Promise<any> {
  const { data } = await axios.get(`${MENU_JSON_API}${name}`);
  return data;
}
