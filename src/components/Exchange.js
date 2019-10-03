import React, { useState, useEffect } from 'react';
import { useAxiosAsyncGet } from '../hooks/useAxios';
import { baseURL } from '../api/urls.js';

const Exchange = ({
  match: {
    params: { id },
  },
}) => {
  const [exchange, exchangeError, setExchange] = useAxiosAsyncGet(baseURL);
  useEffect(() => {
    if (exchangeError) {
      console.error('exchange error', exchangeError);
    }
  });
  useEffect(() => {
    console.log('exchange useEffect');
    setExchange(`/exchanges/${id}`);
  }, [id]);

  if (!exchange) return <div>Loading...</div>;

  let country = exchange.country ? `from ${exchange.country}` : null;

  return (
    <h1 style={{ fontSize: '10vw' }}>
      {exchange.name} is crypto coin {country}
    </h1>
  );
};
export default Exchange;
