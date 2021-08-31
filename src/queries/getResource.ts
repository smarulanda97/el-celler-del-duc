import { axios } from '@libs/axios';
import { buildBluePrint, deserialize } from '@utils/index';

const SUBREQUEST_API = '/subrequests?_format=json';

export async function getResource(path: string): Promise<any> {
  const payload = buildBluePrint(path);
  const { data } = await axios.post(SUBREQUEST_API, payload);

  if (!data['resolvedResource#uri{0}']) {
    return undefined;
  }

  const json = JSON.parse(data['resolvedResource#uri{0}']?.body);

  if (data.errors) {
    throw new Error(json.errors[0].detail);
  }

  return deserialize(json);
}
