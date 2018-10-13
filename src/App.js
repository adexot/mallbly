import React, {Fragment, } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/home';
import Signup from './pages/signup';

const App = () => (
  <Router>
    <Fragment>
      <Route exact path='/' component={Home} />
      <Route exact path='/signup' component={Signup} />
    </Fragment>
  </Router>
);


export default App;
