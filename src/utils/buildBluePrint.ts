export function buildBluePrint(path: string): any[] {
  return [
    {
      requestId: 'router',
      uri: '/router/translate-path?_format=json&path=' + path,
      action: 'view',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg1NDE1MjVlNWNmY2E5MmNhZTFlNjU4YTZhODYxYzUzODFjYmQ3MTIzODY2ZWQ1MzY3MTk5M2U3MjIzMzU5NGQ0Mzk0OGRhNGRhZGE0Nzk3In0.eyJhdWQiOiI1ZThjNzdlNy1kY2MxLTQyYWUtYWFkMS0zOTFhYWIxNDNjMzYiLCJqdGkiOiI4NTQxNTI1ZTVjZmNhOTJjYWUxZTY1OGE2YTg2MWM1MzgxY2JkNzEyMzg2NmVkNTM2NzE5OTNlNzIyMzM1OTRkNDM5NDhkYTRkYWRhNDc5NyIsImlhdCI6MTYzMjIwMjExOCwibmJmIjoxNjMyMjAyMTE4LCJleHAiOjE2MzUyMDIxMTgsInN1YiI6IjUiLCJzY29wZXMiOlsiYXV0aGVudGljYXRlZCJdfQ.GbCh0-ofT4bc2N_voDc2ndXhn1_soV9LhoW2KLlIGDXHe4PEgR9ANFKYeDEYsvQqD6q_8289ciA8-SpE3H3aGYb5AGEBVFnzcyOtdgnJa2UVj_Lp9H5irDMSRA9eSi-L3u2R99SQhP9qVLJzjhzuJBZUN8aHmXj9clgUxiUfgBtp7BytEtMBrA7MoVMm-ZtZ3Pv24cd9I_Z44PbgUDjE8xYa-Ux74JVi6_euT4-VrNmXvvD-vHDrOTdxjkWPg5bprTQIIc0Q2WiuO-H-IG3UetNJGfybLEiw2_BgeQDwK1h8CinKrOjO6gPZxCNSQwkvNcb5k5SNcRUuxV1cUErmhg',
      },
    },
    {
      action: 'view',
      requestId: 'resolvedResource',
      uri: '{{router.body@$.jsonapi.individual}}',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/vnd.api+json',
      },
      waitFor: ['router'],
    },
  ];
}
