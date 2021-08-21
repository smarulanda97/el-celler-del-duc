import Jsona from 'jsona';
import { TJsonApiBody, TDeserializeOptions } from 'jsona/lib/JsonaTypes';

const dataFormatter = new Jsona();

export function deserialize(
  body: TJsonApiBody,
  options?: TDeserializeOptions
): any {
  if (!body) {
    return null;
  }

  return dataFormatter.deserialize(body, options);
}
