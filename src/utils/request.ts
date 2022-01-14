/* COMPONENTS */
import axios from "axios";

/* MODELS */
import { TRequestMethod } from "src/models"

/* CONFIGS */
import {
  apiURL
} from "src/config";

const http = axios.create({
  baseURL: apiURL,
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error;
  },
);

const request = async (method: TRequestMethod, endpoint: string, data: any = {}) => {
  let additionalHeaders = {};

  switch (method) {
    case "POST":
      return http.post(endpoint, data, additionalHeaders);

    case "PUT":
      return http.put(endpoint, data, additionalHeaders);

    case "GET":
      return http.get(endpoint, additionalHeaders);

    default:
      return null;
  }
};

export const postRequest = (endpoint: string, data = {}) => request("POST", endpoint, data);
export const putRequest = (endpoint: string, data = {}) => request("PUT", endpoint, data);
export const getRequest = (endpoint: string) => request("GET", endpoint);

export default http;
