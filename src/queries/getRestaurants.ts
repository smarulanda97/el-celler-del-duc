import { axios } from '@libs/axios';
import { deserialize } from '@utils/deserialize';

const RESTAURANTS_JSON_API = '/jsonapi/taxonomy_term/restaurants';

export async function getRestaurants(): Promise<any> {
  const { data } = await axios.get(RESTAURANTS_JSON_API);

  if (data.errors) {
    throw new Error(data.errors[0].detail);
  }

  return deserialize(data);
}
