import axios from 'axios';
import { useState } from 'react';

export const useAxios = baseURL => {
  const [data, setData] = useState(async () => {
    try {
      const data = await axios.get(baseURL);
      return data;
    } catch (err) {
      console.error(err);
      return err;
    }
  });

  return [data];
};
