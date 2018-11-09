import React, {Fragment, } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/home';
import Signup from './pages/signup';
import CMS from './pages/cms';
import Domain from './pages/domain';
import WhoIs from './pages/whois';
import Pricing from './pages/pricing'

const App = () => (
  <Router>
    <Fragment>
      <Route exact path='/' component={Home} />
      <Route exact path='/cms' component={CMS} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/domain' component={Domain} />
      <Route exact path='/whois' component={WhoIs} />
      <Route exact path='/pricing' component={Pricing} />
    </Fragment>
  </Router>
);


export default App;
