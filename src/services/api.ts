import axios, { AxiosError, AxiosResponse } from "axios";


const baseApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


const parseResponse = (response: AxiosResponse) => {

  const res = response;
  if (response.status === 200) {
    return res.data;
  }
  throw res;
};

const parseError = (response: AxiosError) => {

  if (response.response && response.response.data) {
    throw response.response.data
  }

  throw response;
};

const api = {

  fetchPokemons: async (offsetValue: any) => {
    return await baseApi
      .get(`/?offset=${offsetValue}`, {
        method: "GET",
      })
      .then(parseResponse)
      .catch(parseError);
  },
};

export default api;
