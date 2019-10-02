import React from 'react';
import { Route } from 'react-router-dom';
import App from '../App';
import Navbar from '../components/Navbar';

const Routes = () => (
  <>
    <Navbar />
    <Route path='/' component={App} />
  </>
);

export default Routes;
