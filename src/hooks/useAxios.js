import axios from 'axios';
import { useState, useEffect } from 'react';

// export const useAxios = (baseURL, url) => {
//   const [data, setData] = useState(() => {
//     axios
//       .get(`${baseURL}${url}`)
//       .then(res => {
//         return res.data;
//       })
//       .catch(err => {
//         console.error(err);
//       });
//   });

//   const updateData = async newURL => {
//     setData(await axios.get(`${baseURL}${newURL}`));
//   };

//   const createData = data => {
//     setData(data);
//   };

//   return [data, createData, updateData];
// };

export const useAxios = (baseURL, url) => {
  const [fetchedData, setFetchedData] = useState(() => {
    url && asyncAxios(baseURL, url);
  });
  const [error, setError] = useState();

  async function asyncAxios(baseURL, url) {
    console.log('async axios fn', baseURL, url);
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

  const setData = newUrl => {
    asyncAxios(baseURL, newUrl);
  };

  return [fetchedData, error, setData];
};
