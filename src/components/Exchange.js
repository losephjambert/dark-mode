import React, { useEffect } from 'react';
import { useAxiosAsyncGet } from '../hooks/useAxios';
import { baseURL } from '../api/urls.js';

const Exchange = ({
  match: {
    params: { id },
  },
}) => {
  const [exchange, exchangeError] = useAxiosAsyncGet(baseURL, `/exchanges/${id}`);
  useEffect(() => {
    if (exchangeError) {
      console.error(exchangeError);
    }
  });

  if (!exchange) return <div>Loading...</div>;

  return (
    <h1 style={{ fontSize: '10vw' }}>
      {exchange.name} is crypto coin from {exchange.country}
    </h1>
  );
};
export default Exchange;
