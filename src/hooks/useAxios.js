import axios from 'axios';
import { useState } from 'react';

export const useAxiosAsyncGet = (baseURL, url) => {
  const [data, setData] = useState(() => {
    url && asyncAxios(baseURL, url);
  });
  const [error, setError] = useState();

  async function asyncAxios(baseURL, url) {
    console.log('async axios fn', baseURL, url);
    await axios
      .get(baseURL + url)
      .then(res => {
        setData(res.data);
        setError(null);
      })
      .catch(err => {
        setError(err);
      });
  }

  return [data, setData, error];
};
