import React, { useEffect } from 'react';
import { useAxiosAsyncGet } from '../hooks/useAxios';

const baseURL = `https://api.coingecko.com/api/v3`;

const ExchangesContainer = () => {
  const [exchangesList, exchangesListError] = useAxiosAsyncGet(baseURL, `/exchanges/list`);
  const [exchange, exchangeError, setExchange] = useAxiosAsyncGet(baseURL);
  useEffect(() => {
    if (exchangesListError) {
      console.error(exchangesListError);
    }
    if (exchangeError) {
      console.error(exchangeError);
    }
  });

  const handleClick = id => {
    setExchange(`/exchanges/${id}`);
  };

  return (
    <div>
      <h2>Selected Exchange Country: {exchange && exchange.country}</h2>
      <ol>
        {exchangesList &&
          exchangesList.map(exchange => (
            <li onClick={() => handleClick(exchange.id)} key={exchange.id}>
              {exchange.name}
            </li>
          ))}
      </ol>
    </div>
  );
};

export default ExchangesContainer;
