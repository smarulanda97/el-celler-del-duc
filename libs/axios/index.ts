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
};

export const axios = axiosInstance.create(axiosConfig);
