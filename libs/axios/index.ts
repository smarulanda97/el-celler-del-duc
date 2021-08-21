import { baseUrl } from '@libs/axios/constants';
import { default as axiosInstance, AxiosRequestConfig } from 'axios';

interface JWTHeader {
  Authorization?: string;
}

export function getJWTHeader(): JWTHeader {
  return {
    Authorization: `Bearer `,
  };
}

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || baseUrl,
  headers: {
    Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM3OTA0YjcwZTU5Njk1YWEyY2YyMDExMzQ0NDNhYjg5NjdiOWQzYzY5MWZkZGI5NThhOWViOWIzN2M2Y2NjMmEzNTEzZjFhYWJmOTMzMjNkIn0.eyJhdWQiOiI1ZThjNzdlNy1kY2MxLTQyYWUtYWFkMS0zOTFhYWIxNDNjMzYiLCJqdGkiOiJjNzkwNGI3MGU1OTY5NWFhMmNmMjAxMTM0NDQzYWI4OTY3YjlkM2M2OTFmZGRiOTU4YTllYjliMzdjNmNjYzJhMzUxM2YxYWFiZjkzMzIzZCIsImlhdCI6MTYyOTU4MzczNywibmJmIjoxNjI5NTgzNzM3LCJleHAiOjE2MzI1ODM3MzcsInN1YiI6IjUiLCJzY29wZXMiOlsiYXV0aGVudGljYXRlZCJdfQ.UQOYmLIemnnXIEUoC3Q3TtJGQDZrwm0_aVHl3AaCy-4ziK4uLsyK70PS5elANVawma4OdDC4QhvwlRclkwvlxZE1tEYLFzXASPaVMBEhS1e6iDXp0FXQ9DHIYkkM9Y1QdohD-K5oEC8IzwHqI5Bor7nyTmaJPgNHmcI2bHs9DD8EmL0_cMPqSY7HCy-uONNobqQUDZ3wlROnw8HEPmxZ_0LDyiaCQUAJTpq2JRe991eIf10L1hk9nOOJW23fOJwqm2cjWqCKt945KE5bDCOQ5W-56sB-nPpseZqPLzUD2zoD4knKQ40LIEcF0CEQvV9BMa94CwoJco1u1Z07317cqg',
  },
};

export const axios = axiosInstance.create(axiosConfig);
