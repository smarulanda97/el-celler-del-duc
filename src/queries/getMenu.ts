import { axios } from '@libs/axios';
import { deserialize } from '@utils/deserialize';

const MENU_JSON_API = '/jsonapi/menu_items/';

export async function getMenu(name: string): Promise<any> {
  const { data } = await axios.get(MENU_JSON_API + name);

  if (data.errors) {
    throw new Error(data.errors[0].detail);
  }

  return deserialize(data);
}
