import { axios } from '@libs/axios';
import { deserialize } from '@utils/deserialize';

const GALLERY_JSON_API = '/jsonapi/node/gallery_image';

export async function getGalleryImages(): Promise<any> {
  const { data } = await axios.get(GALLERY_JSON_API);

  if (data.errors) {
    throw new Error(data.errors[0].detail);
  }

  return deserialize(data);
}
