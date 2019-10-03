import axios from 'axios';
import { useState } from 'react';

export const useAxiosAsyncGet = (baseURL, url) => {
  const [fetchedData, setFetchedData] = useState(() => {
    url && asyncAxios(baseURL, url);
  });
  const [error, setError] = useState(() => !url && null);

  async function asyncAxios(baseURL, url) {
    await axios
      .get(baseURL + url)
      .then(res => {
        setFetchedData(res.data);
        setError(null);
      })
      .catch(err => {
        setError(err);
      });
  }

  const setData = newURL => {
    asyncAxios(baseURL, newURL);
  };

  return [fetchedData, error, setData];
};
