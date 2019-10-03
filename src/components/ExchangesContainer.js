import React, { useEffect } from 'react';
import { useAxiosAsyncGet } from '../hooks/useAxios';
import { baseURL } from '../api/urls.js';

import ExchangesList from './ExchangesList';

const ExchangesContainer = () => {
  const [exchanges, exchangesError] = useAxiosAsyncGet(baseURL, `/exchanges/list`);
  useEffect(() => {
    if (exchangesError) {
      console.error('exchange list error', exchangesError);
    }
  });

  return <ExchangesList exchanges={exchanges || []} />;
};

export default ExchangesContainer;
