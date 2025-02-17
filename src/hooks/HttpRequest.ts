import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { useCallback } from "react";
import { serverUri } from "../../path";
import { showToastError } from "../utils/Toast";
import { useAppSelector } from "../store/hooks";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: serverUri,
});

const setAuthHeader = (
  token: string | null,
  config: AxiosRequestConfig = {}
): AxiosRequestConfig => {
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
};

const handleRequest = async <T>(
  request: () => Promise<AxiosResponse<T>>
): Promise<T> => {
  try {
    const response = await request();
    return response.data;
  } catch (error: any) {
    console.error("API call error:", error);
    showToastError(error.response ? error.response.data : error.message);
    throw error.response ? error.response.data : error;
  }
};

export const useHttpClient = () => {
  const token = useAppSelector((state) => state.auth.token);

  const get = useCallback(
    async <T>(
      endpoint: string,
      config: AxiosRequestConfig = {}
    ): Promise<T> => {
      const finalConfig = setAuthHeader(token, config);
      return handleRequest<T>(() => axiosInstance.get(endpoint, finalConfig));
    },
    []
  );

  const post = useCallback(
    async <T>(
      endpoint: string,
      data?: any,
      config: AxiosRequestConfig = {}
    ): Promise<T> => {
      const finalConfig = setAuthHeader(token, config);
      return handleRequest<T>(() =>
        axiosInstance.post(endpoint, data, finalConfig)
      );
    },
    []
  );

  const patch = useCallback(
    async <T>(
      endpoint: string,
      data?: any,
      config: AxiosRequestConfig = {}
    ): Promise<T> => {
      const finalConfig = setAuthHeader(token, config);
      return handleRequest<T>(() =>
        axiosInstance.patch(endpoint, data, finalConfig)
      );
    },
    []
  );

  const del = useCallback(
    async <T>(
      endpoint: string,
      config: AxiosRequestConfig = {}
    ): Promise<T> => {
      const finalConfig = setAuthHeader(token, config);
      return handleRequest<T>(() =>
        axiosInstance.delete(endpoint, finalConfig)
      );
    },
    []
  );

  return { get, post, patch, delete: del };
};
