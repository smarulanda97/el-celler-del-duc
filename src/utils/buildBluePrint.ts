export function buildBluePrint(path: string): any[] {
  return [
    {
      requestId: 'router',
      uri: '/router/translate-path?_format=json&path=' + path,
      action: 'view',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU0MzZlMDg5ZDg1MGM2YzZkZDZjZjI5MmY0MzAyYjljZjc2ZTNjNjU1ODkwYTAwY2NiNTYxMmRmMjliMzhjZDI4NGY0NmQ2ODhlZDM0Y2IyIn0.eyJhdWQiOiI1ZThjNzdlNy1kY2MxLTQyYWUtYWFkMS0zOTFhYWIxNDNjMzYiLCJqdGkiOiI1NDM2ZTA4OWQ4NTBjNmM2ZGQ2Y2YyOTJmNDMwMmI5Y2Y3NmUzYzY1NTg5MGEwMGNjYjU2MTJkZjI5YjM4Y2QyODRmNDZkNjg4ZWQzNGNiMiIsImlhdCI6MTYyOTY5MzM4OCwibmJmIjoxNjI5NjkzMzg4LCJleHAiOjE2MzI2OTMzODgsInN1YiI6IjUiLCJzY29wZXMiOlsiYXV0aGVudGljYXRlZCJdfQ.uJYWCv2I3TSolX52m2bpMeeI7WV7zCVAilm_zR5hQpSOKi_r_mvWcuwHfFeiygUBK5dN1wmW055ss6u1zjEA-lIIvhie5C7DKG3jqInmKTcDeuQ_zAnBn9mEJjS5rdGBgOAJlNtTWBa6ejYt8AkZCLNsn2_wWpLZUhhpBV4Zlxx_Af2d6mu4nxDii7ZHOBO70fmXjIvUEHYbOkt1g8BSrYYDZ3c4QFHa8ErmLZxgV9UUj02axZxRuxl1riDfegkENM4o5-kBNIvJZpegw8TwAjovrs4AvWK_U0hgiD7wc-jdtpp4CqupnGhUWWKNCtC_h74Ap6AP7mXFe-oEAOqNPw',
      },
    },
    {
      action: 'view',
      requestId: 'resolvedResource',
      uri: '{{router.body@$.jsonapi.individual}}?include=field_banner,field_banner.field_media',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/vnd.api+json',
      },
      waitFor: ['router'],
    },
  ];
}
