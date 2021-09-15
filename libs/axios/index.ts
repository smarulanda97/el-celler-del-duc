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
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZkY2I1NmI0OTdiYWQ0ZTM3ZTJhM2ZiNTdkNWM2ZTE0Nzc3ZDE4ODljZmEyMGQ2ZWVhY2Q5ZTkwNTU3ZDhmNjcyMDRmZmM2YzYwNTQwZTE5In0.eyJhdWQiOiI1ZThjNzdlNy1kY2MxLTQyYWUtYWFkMS0zOTFhYWIxNDNjMzYiLCJqdGkiOiJmZGNiNTZiNDk3YmFkNGUzN2UyYTNmYjU3ZDVjNmUxNDc3N2QxODg5Y2ZhMjBkNmVlYWNkOWU5MDU1N2Q4ZjY3MjA0ZmZjNmM2MDU0MGUxOSIsImlhdCI6MTYzMTY4NjE5NiwibmJmIjoxNjMxNjg2MTk2LCJleHAiOjE2MzQ2ODYxOTYsInN1YiI6IjUiLCJzY29wZXMiOlsiYXV0aGVudGljYXRlZCJdfQ.V6SuIsJ7yL8iABNe1ejleNJPQxMs3RoBEP6puuEfNQ38ZO5TatGI-Oo55NwVIoT0a5BksiyKut9Z4ylz02c7AC9LxUtiMPU8tOivsxdMlgYkIDL0R1VJcAAankp1CPO4EtTXQTg9PqYoTMskz6ue6tQW_hhQGM9CboAp3MzWiootXaVBU2sCMElVD4V5oL3nWoiNXBjUEDGHWck9pZEImSTw6nirAxajeCwFCjsplY4xK0dZVkCHTday-Yb7JXWRTXm8U6x_tKp-hmQU7at_cHkN3wxmwowfSFgrNjst3XlZPJIvhiZxeRaB9iakuqUAysxqrnp_mdT10dqRZbm41w',
  },
};

export const axios = axiosInstance.create(axiosConfig);
