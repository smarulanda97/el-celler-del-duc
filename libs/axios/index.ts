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
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI2NTk1MThjMTc0OWQwYTU4ZTg3ZTdlYjBjYmY2NzFjYTFlZjU2OWFiOGY0YmZjMDg1MjhhMDg0NGFlNWNiNDcyODA4MThkOGEyNWI0ZjJlIn0.eyJhdWQiOiI1ZThjNzdlNy1kY2MxLTQyYWUtYWFkMS0zOTFhYWIxNDNjMzYiLCJqdGkiOiJiNjU5NTE4YzE3NDlkMGE1OGU4N2U3ZWIwY2JmNjcxY2ExZWY1NjlhYjhmNGJmYzA4NTI4YTA4NDRhZTVjYjQ3MjgwODE4ZDhhMjViNGYyZSIsImlhdCI6MTYyOTg3MTI3NCwibmJmIjoxNjI5ODcxMjc0LCJleHAiOjE2MzI4NzEyNzQsInN1YiI6IjUiLCJzY29wZXMiOlsiYXV0aGVudGljYXRlZCJdfQ.xsPtbncvQHHBmVDXtunP40DydN9lZTcUSbuopRJCZDpFze8sTXH4z5IPEwln5DRv6VdVu8oQKxGdONdfqGQBuqSqfKPWz2kdLdJ3sDCB9_9Ylv6ZA_pq1Ir1FTaPPDeDJksYC33iq5FpYXjs1pdB5nZlv1lkbSHa0nYHRV9yPanZId5F7VvTi4rJ_CQQ7Fa-EBqWG3RHIxgwcoZeRfWSDe9WZBQb6CHoRYP5uZODtn5BQvnXAQx4RlNIBo0oBWgmKK9BO0LSrYCcPbOxZCdsDGHQW-5dpar6lXlUi-aG_5o10jGV42lN28GkIkshmdmFkzGUSaAny8TKdHV3ZOifrQ',
  },
};

export const axios = axiosInstance.create(axiosConfig);
