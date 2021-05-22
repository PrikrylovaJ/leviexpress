import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './style.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Reservation from './Reservation';

const App = () => (
  <>
    <Router>
      <Header/>
        <Switch>
          <Route path="/reservation">
            <Reservation />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      <Footer/>
    </Router>
  </>
);



render(<App />, document.querySelector('#app'));
