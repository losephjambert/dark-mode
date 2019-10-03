import React, { useEffect, useState } from 'react';
import { useAxiosAsyncGet } from '../hooks/useAxios';

const baseURL = `https://api.coingecko.com/api/v3`; // https://api.coingecko.com/api/v3/exchanges/list

const ExchangesContainer = () => {
  const [exchangesList, setExchangesList, exchangesListError] = useAxiosAsyncGet(baseURL, `/exchanges/list`);
  const [id, setId] = useState();

  return (
    <div>
      <ol>{exchangesList && exchangesList.map(exchange => <li key={exchange.id}>{exchange.name}</li>)}</ol>
    </div>
  );
};

export default ExchangesContainer;
