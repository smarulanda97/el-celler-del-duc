import { useResource } from '@hooks/useResource';
import { DrupalParagraph } from '@libs/types/AppTypes';

export function useParagraph<PType>(paragraphType: string): PType {
  const {
    node: { field_content = [] },
  } = useResource();

  let paragraph: any = {};
  if (field_content.length) {
    paragraph = field_content.find(
      (paragraph: DrupalParagraph) => paragraph.type === paragraphType
    );
  }

  return paragraph;
}
