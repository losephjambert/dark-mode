import React, { useState, useEffect } from 'react';
import { useAxios } from '../hooks/useAxios';

const ExchangesContainer = () => {
  const [exchangesList, setExchangesList] = useState([]);
  const [currentExchange, setCurrentExchange] = useState({});
  const [data] = useAxios(`https://api.coingecko.com/api/v3/exchanges/abcc`);
  useEffect(() => {}, []);

  console.log(data);

  return <div>ExchangesContainer</div>;
};

export default ExchangesContainer;
