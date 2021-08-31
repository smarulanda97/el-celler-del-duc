export function buildBluePrint(path: string): any[] {
  return [
    {
      requestId: 'router',
      uri: '/router/translate-path?_format=json&path=' + path,
      action: 'view',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImIzOWViNmU3NmE5NjE5ZDExM2Q1NjJmYjkzNjgwNTA4Y2MyNGRmZTRjZTUxM2VhZDUzZGYwYjk4YzZmZjE5NmNjZDJlZjJjNTBmZGNhYjU3In0.eyJhdWQiOiI1ZThjNzdlNy1kY2MxLTQyYWUtYWFkMS0zOTFhYWIxNDNjMzYiLCJqdGkiOiJiMzllYjZlNzZhOTYxOWQxMTNkNTYyZmI5MzY4MDUwOGNjMjRkZmU0Y2U1MTNlYWQ1M2RmMGI5OGM2ZmYxOTZjY2QyZWYyYzUwZmRjYWI1NyIsImlhdCI6MTYzMDM4NzQ2MiwibmJmIjoxNjMwMzg3NDYyLCJleHAiOjE2MzMzODc0NjIsInN1YiI6IjUiLCJzY29wZXMiOlsiYXV0aGVudGljYXRlZCJdfQ.xq5k44Lo2l2TU-n6olb8v3KVUNC7ldr7eeVkMFQgAvkQBQA0oEbmr2bVb3xynzhpx9YrQOyj--S-VMMLySPqlfipXDP8Xu4d4y3I1Le7XRn5D3j_gdJmXxuKxSj-AVg_rowu5Ayp3lvwq0Y-vlOY4R376vCiUUXLa94adoCT3_NPmxNVPFSPLiuBzc1tSZhnkt4tGnStNMn2sU4ZtRy81JYvmEloUfyJOqyopTVTlzJXzlrBxkHGEMV0Zk7lCmYgcfwBHcJjUHpjBUYWNCkrH3-4OnT1ew6CPaEEnt47moUC7ZArx2409FEvfbqOuhQg7LQlLU7Gd_Ty8FUoDo_yXQ',
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
