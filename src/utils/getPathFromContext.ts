import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';

type ContextType = GetServerSidePropsContext | GetStaticPropsContext;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getPathFromContext(context: ContextType, prefix = '') {
  let slug = getSlugFromContext(context);

  // Handle locale.
  if (context?.locale && context.locale !== context.defaultLocale) {
    slug = `/${context.locale}/${slug}`;
  }

  return !slug
    ? process.env.NEXT_PUBLIC_DRUPAL_FRONT_PAGE
    : prefix
    ? `${prefix}/${slug}`
    : slug;
}

function getSlugFromContext(context: ContextType): string | undefined {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const slug = context?.params?.slug ? context.params.slug : undefined;
  return Array.isArray(slug) ? slug.join('/') : slug;
}
