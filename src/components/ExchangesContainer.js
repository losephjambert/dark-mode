import React, { useEffect } from 'react';
import { useAxiosAsyncGet } from '../hooks/useAxios';
import { Link } from 'react-router-dom';
import { baseURL } from '../api/urls.js';

const ExchangesContainer = () => {
  const [exchangesList, exchangesListError] = useAxiosAsyncGet(baseURL, `/exchanges/list`);
  useEffect(() => {
    if (exchangesListError) {
      console.error(exchangesListError);
    }
  });

  return (
    <div>
      <ol>
        {exchangesList &&
          exchangesList.map(exchange => (
            <li key={exchange.id}>
              <Link to={`/exchange/${exchange.id}`}>{exchange.name}</Link>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default ExchangesContainer;
