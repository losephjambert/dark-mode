import React from 'react';
import { Route } from 'react-router-dom';
import App from '../App';
import Navbar from '../components/Navbar';
import Exchange from '../components/Exchange';

const Routes = () => (
  <>
    <Navbar />
    <Route exact path='/' component={App} />
    <Route path='/exchange/:id' render={props => <Exchange {...props} />} />
  </>
);

export default Routes;
