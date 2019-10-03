import React, { useEffect, useState } from 'react';
import { useAxios } from '../hooks/useAxios';

const baseURL = `https://api.coingecko.com/api/v3`; // https://api.coingecko.com/api/v3/exchanges/list

const ExchangesContainer = () => {
  const [exchangesList, exchangesListError] = useAxios(baseURL, `/exchanges/list`);
  const [exchange, exchangeError, setExchange] = useAxios();
  const [id, setId] = useState();

  const handleClick = id => {
    console.log(id);
    // const e = f(baseURL, `/exchanges/${id}`);
    // setExchange(baseURL, `/exchanges/${id}`);
    setId(id);
  };

  useEffect(() => {
    setExchange(baseURL, `/exchanges/${id}`);
  }, [id]);

  console.log(exchange);

  return (
    <div>
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
